const express = require('express');

module.exports = (app) => {
    app.get('/', (req,res) => {
        res.send({hi:'there'});
    });

    app.use (express.json());

    app.get('/travelAdvisory', (req, res) => {
        
    })
};