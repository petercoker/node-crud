const http = require('http');
const fileSystem = require('fs');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    fileSystem.readFile('index.html', (err, data) => {
        if(err) {
            res.writeHead(404);
            res.end('File not found!');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    })
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
})