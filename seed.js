// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var mongoose = require("mongoose");
var db = require('./models');


var albumList = [
{
            
              artistName: 'the Old Kanye',
              name: 'The College Dropout',
              releaseDate: '2004, February 10',  
              genres: [ 'rap', 'hip hop' ]
            },
{
      
              artistName: 'the New Kanye',
              name: 'The Life of Pablo',
              releaseDate: '2016, Febraury 14',
              genres: [ 'hip hop' ]
            },
{
  
              artistName: 'the always rude Kanye',
              name: 'My Beautiful Dark Twisted Fantasy',
              releaseDate: '2010, November 22',
              genres: [ 'rap', 'hip hop' ]
            },
{
         
              artistName: 'the sweet Kanye',
              name: '808s & Heartbreak',
              releaseDate: '2008, November 24',
              genres: [ 'r&b', 'electropop', 'synthpop' ]
            },
];

db.Album.remove({}, function(err, albums){

db.Album.create(albumList, function(err, album){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", album);
    console.log("created", album.length, "albums");
    process.exit();
});

});

db.Album.find({}, function(err, albums) {
  res.json(albums);
});