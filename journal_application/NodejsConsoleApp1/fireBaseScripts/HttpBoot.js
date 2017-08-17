var http = require('http');

exports.bootTestServer = function (categories) {

    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        var arrayLength = categories.length;
        for (var i = 0; i < arrayLength; i++) {
            res.write(categories[i] + "\n")
            //Do something
        }
        res.end('Hello World!');
    }).listen(8080);

}