join movies into comments

db.comments.aggregate([
   {
     $lookup: {
       from: "movies",
       localField: "movie_id",  //movie_id in comments documents *A*
       foreignField: "_id",  //_id in movies documents *B*
       as: "movie_details", //join movies as movie_details *C*
     },
   },
   {
     $limit: 1
   }
 ])

//output
[
  {
    _id: ObjectId("5a9427648b0beebeb69579e7"),
    name: 'Mercedes Tyler',
    email: 'mercedes_tyler@fakegmail.com',
    movie_id: ObjectId("573a1390f29313caabcd4323"), //*A*
    text: 'Eius veritatis vero facilis quaerat fuga temporibus. Praesentium expedita sequi repellat id. Corporis minima enim ex. Provident fugit nisi dignissimos nulla nam ipsum aliquam.',
    date: ISODate("2002-08-18T04:56:07.000Z"),
    movie_details: [ //*C*
      {
        _id: ObjectId("573a1390f29313caabcd4323"), //*B*
        plot: 'A young boy, opressed by his mother, goes on an outing in the country with a social welfare group where he dares to dream of a land where the cares of his ordinary life fade.',
        genres: [ 'Short', 'Drama', 'Fantasy' ],
        runtime: 14,
        rated: 'UNRATED',
        cast: [
          'Martin Fuller',
          'Mrs. William Bechtel',
          'Walter Edwin',
          'Ethel Jewett'
        ],
        num_mflix_comments: 1,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTMzMDcxMjgyNl5BMl5BanBnXkFtZTcwOTgxNjg4Mg@@._V1_SY1000_SX677_AL_.jpg',
        title: 'The Land Beyond the Sunset',
        fullplot: "Thanks to the Fresh Air Fund, a slum child escapes his drunken mother for a day's outing in the country. Upon arriving, he and the other children are told a story about a mythical land of no pain. Rather then return to the slum at day's end, the lad seeks to journey to that beautiful land beyond the sunset.",
        languages: [ 'English' ],
        released: ISODate("1912-10-28T00:00:00.000Z"),
        directors: [ 'Harold M. Shaw' ],
        writers: [ 'Dorothy G. Shore' ],
        awards: { wins: 1, nominations: 0, text: '1 win.' },
        lastupdated: '2015-08-29 00:27:45.437000000',
        year: 1912,
        imdb: { rating: 7.1, votes: 448, id: 488 },
        countries: [ 'USA' ],
        type: 'movie',
        tomatoes: {
          viewer: { rating: 3.7, numReviews: 53, meter: 67 },
          lastUpdated: ISODate("2015-04-27T19:06:35.000Z")
        }
      }
    ]
  }
]