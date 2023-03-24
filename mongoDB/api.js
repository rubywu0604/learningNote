//link to clusterA,

var axios = require('axios');
var data = JSON.stringify({
    "collection": "movies",
    "database": "sample_mflix",
    "dataSource": "ClusterA",
    "projection": {
        "_id": 1,
        "title": 1,
        "year": 1
    },
    "sort": {"year": 1},
    "limit": 5
});

var config = {
    method: 'post',
    url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-zhkek/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'lcYeR16pq0SvMUdn4BDv6HzaCGvuRBoFO7etAGGntqqVyhCVrwjsSQ58xJyQPgk9',
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });