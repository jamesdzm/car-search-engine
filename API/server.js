var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res){
  // All the web scraping magic will happen here
  url = "http://www.imdb.com/title/tt1229340/";

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, release, rating;
      var json = { title: "", release: "", rating: "" };

      // We use the unique header class as a starting point
      $('.title_wrapper').filter(function(){
        // Store data we filter into a variable
        var data = $(this);

        title = data.children().first().text();
        release = data.children().first().children().text();

        json.title = title;
        json.release = release;
      })

      $('.star-box-giga-star').filter(function(){
        var data = $(this);
        rating = data.text();
        json.rating = rating;
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
