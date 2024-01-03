const http = require('http');
const greet = require('./greet');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end(greet('Peter')); // if the greet module only contains the greet function and nothing else, using module.exports = greet
    res.end(greet.greet('Peter Coker'));
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
})

