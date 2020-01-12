const express = require('express');
const getAdvisoryData = require('../utils/getAdvisoryData');
const japanAdvisoryData = require('../mockData/mockItineraryInfo.json');
// const defaultAdvisoryData = require('');

module.exports = (app) => {
    app.get('/', (req,res) => {
        res.send({hi:'there'});
    });

    app.use (express.json());
    app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });
    
    app.get('/travelAdvisory/:location', async (req, res) => {
        console.log('got smthing');
        console.log(req.params.location);
        const advisory = await getAdvisoryData(req.params.location).then ((result) => {
            res.send(result);
        });
    });

    app.get('/getItinerary/:country', function(req, res) {
        if(req.params.country == 'japan') {
            res.send(japanAdvisoryData);
        } else {
            res.send({});
        }
    });
};