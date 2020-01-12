const express = require('express');
const getAdvisoryData = require('../utils/getAdvisoryData');

module.exports = (app) => {
    app.get('/', (req,res) => {
        res.send({hi:'there'});
    });

    app.use (express.json());

    app.post('/travelAdvisory', async (req, res) => {
        const advisory = await getAdvisoryData(req.body.location).then ((result) => {
            res.send(result);
        })
    });
};