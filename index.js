require('dotenv').config(); 

const express = require('express');
const server = express();
const routes = require('./routes');
server.use(express.json());
server.use('/', routes);
server.get('/hello', (req, res) => {
    res.json('hello, there')
})
const Port = process.env.PORT || 4000
server.listen(Port, () => {
    console.log(`listening on port ${Port}`)
})