const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Welcome to the app');
    next();
});

app.use((req, res, next) => {
    res.send('Hello from Express');
});

module.exports = app;