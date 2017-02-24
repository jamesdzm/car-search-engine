var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/autotraderAPI', function(req, res){

  var userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36";

  var make = req.query.make;
  var model = req.query.model;

  var url = "http://www.autotrader.co.uk/car-search";
      url += "?make=" + make;
      url += "&model=" + model;
      url += "&postcode=rg53ha";
      url += "&radius=1500";
      url += "&onesearchad=Used";
      url += "&onesearchad=Nearly%20New";
      url += "&onesearchad=New";
      url += "&search-target=usedcars";
      url += "&is-quick-search=true";
      url += "&quicksearch=true";

  request({ url, headers: {'User-Agent': userAgent} }
  , function(error, response, html){
    if(!error){

      var $ = cheerio.load(html);
      var results;
      var json = {};

      $('h1.search-form__count.js-results-count').filter(function(){
        var data = $(this);
        results = data.text();
        json.results = results;
      })
    }
    res.send(json);
  })
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
