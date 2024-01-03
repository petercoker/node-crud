const express = require('express');
const app = express(); // create express app
const port = 3000; // runs on port 3000


// / is the base route
app.get('/', (req, res) => {
    res.send('GET Hello World!');
})

app.post('/', (req, res) => {
    res.send('POST Hello World!');
})

app.put('/', (req, res) => {
    res.send('PUT Hello World!');
})

app.delete('/', (req, res) => {
    res.send('DELETE Hello World!');
})

app.patch('/', (req, res) => {
    res.send('PATCH Hello World!');
})

// start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})