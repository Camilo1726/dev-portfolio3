process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('./config/express');
const app = express();

app.listen(1004);
console.log("Server is running.... at http://localhost:1004/ ");

module.exports = app;