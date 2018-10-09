'use strict'

var express = require('express');
var router = express.Router();
const yelp = require('yelp-fusion');
const configYelp = require('../../config/confignodejs');

/* GET home page. */

const yelpclient = yelp.client(configYelp.confignode.yelp.APIKEY);

router.get('/', function(req, res, next) {
    yelpclient.search({
        term: 'Four Barrel Coffee',
        location: 'san francisco, ca'
    }).then(yelpres => {
        console.log(yelpres.jsonBody.businesses[0].name);
        res.render('index', { title: "Express", yelpsearch: yelpres.jsonBody.businesses[0].name });
    }).catch(e => {
        console.log(e);
    });
    //res.render('index', { title: 'Express' });
});

module.exports = router;