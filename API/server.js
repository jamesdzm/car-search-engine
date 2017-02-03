var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res){
  // All the web scraping magic will happen here
  url = "http://www.autotrader.co.uk/car-search?make=AUDI&model=A3&postcode=rg53ha&radius=1500&onesearchad=Used&onesearchad=Nearly%20New&onesearchad=New&search-target=usedcars&is-quick-search=true&quicksearch=true";

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var results;
      var json = { Results: "" };

      // We use the unique header class as a starting point
      $('search-form__header-content').filter(function(){
        // Store data we filter into a variable
        var data = $(this);

        results = data.children().first().text();
        // release = data.children().first().children().text();

        json.results = results;
      })

    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written!');
    })
    res.send('Check your console');
  })
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
