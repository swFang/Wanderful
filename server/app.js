const express = require('express');
const routes = require('./routes/routes');

const app = express(); 
routes(app);
//var longLat = translate({"city" : "paris"});


const PORT = process.env.PORT || 5000
app.listen(PORT);
