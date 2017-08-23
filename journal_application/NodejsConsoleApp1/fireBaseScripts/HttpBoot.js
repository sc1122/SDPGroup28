var http = require('http');

exports.bootTestServer = function (categories, user) {
    console.log('booting');
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

       res.write(user + "\n\n")
        var arrayLength = categories.length;
        
        for (var i = 0; i < arrayLength; i++) {
            res.write(categories[i] + "\n")
            //Do something
        }
        res.end();

    }).listen(2113)

}