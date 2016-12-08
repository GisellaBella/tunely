var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//var titlize = require('mongoose-title-case');

var AlbumSchema = new Schema ({
			artistName: String,
             name: String,
             releaseDate: String,
             genres: [ String ]
});

var Album = mongoose.model('Album', AlbumSchema);

// AlbumSchema.plugin(titlize, {

//   paths: [ 'artistName', { path: 'name', trim: false } ], // Array of paths 
//   trim: true
// });

module.exports = Album;


