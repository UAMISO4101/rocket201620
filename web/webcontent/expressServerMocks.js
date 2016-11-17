var express = require('express');
var proxy = require('http-proxy-middleware');
var path    = require("path");

// proxy middleware options
var options = {
    target: 'https://freeven-srv.herokuapp.com', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    pathRewrite: {
        '^/api/old-path' : '/api/new-path',     // rewrite path
        '^/api/remove/path' : '/path'           // remove base path
    },
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'dev.localhost:3000' : 'http://localhost:8000'
    }
};

// create the proxy (without context)
var serviceProxy = proxy(options);

// mount `exampleProxy` in web server
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/api_redirected', serviceProxy);
app.listen(process.env.PORT || 3000);


//url mock  http://localhost:3000/api/competition
app.get('/api/competition', function (req, res) {
    var competitions = [
        {
            "id": "2590688a-884c-4fc1-81d3-00eb46ced319",
            "ownerId": "76175b50-5649-404a-b56b-e0eff8b7c23f",
            "startDate": "2016-09-30T16:32:54.4002169+00:00",
            "endDate": "2016-11-26T22:12:14.468776+00:00",
            "name": "December fest competition",
            "status": "Active"
        },
         {
            "id": "2590688a-884c-4fc1-81d3-00eb46ced310",
            "ownerId": "76175b50-5649-404a-b56b-e0eff8b7c231",
            "startDate": "2016-09-30T16:32:54.4002169+00:00",
            "endDate": "2016-11-26T22:12:14.468776+00:00",
            "name": "Lollapalooza competition",
            "status": "Active"
        }
    ];
    res.send(competitions);
});