// { $count: {} }

db.listingsAndReviews.aggregate([
 {
   $match : { accommodates : {$gt: 0}}
 },
 {
   $group : { _id:"$accommodates", total_Rooms: { $count: {} } }
 },
 {
   $sort : { _id: 1 }
 }
 ])

 // { $sum: 1 }

 db.listingsAndReviews.aggregate([
  {
    $match : { accommodates : {$gt: 0}}
  },
  {
    $group : { _id:"$accommodates", total_Rooms: { $sum: 1 } }
  },
  {
    $sort : { _id: 1 }
  }
  ])