/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleAlbums = [];
sampleAlbums.push({
             artistName: 'Ladyhawke',
             name: 'Ladyhawke',
             releaseDate: '2008, November 18',
             genres: [ 'new wave', 'indie rock', 'synth pop' ]
           });
sampleAlbums.push({
             artistName: 'The Knife',
             name: 'Silent Shout',
             releaseDate: '2006, February 17',
             genres: [ 'synth pop', 'electronica', 'experimental' ]
           });
sampleAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ]
           });
sampleAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ]
           });
/* end of hard-coded data */




$(document).ready(function() {
  $.get('api/albums').success(function (albums) {// 
      albums.forEach(function(album) {
        renderAlbum(album);
        });   
      });


$( "#album-form form" ).submit(function( event ) {
alert("yo");
event.preventDefault();
var album =( $(this).serialize());
console.log( $(this).serialize());
$.post('api/albums', album, function(album) {
console.log('album after POST', album);
renderAlbum (album);
});
  });
// $('#album-form form').on('submit', function(event) {
//  alert("yo");
// event.preventDefault();
// var album =( $(this).serialize());
// console.log( $(this).serialize());
// $.post('api/albums', album, function(album) {
// console.log('album after POST', album);

// $("form-horizontal").on ("submit" function (event) {
//   event.preventDefault();
// console.log( $( this ).serialize() );
//   //$(this).trigger("reset");
// //console.log(newAlbum);
// });


// this function takes a single album and renders it to the page
//$each(sampleAlbum, 
// sampleAlbums.forEach(function(albums){
//   renderAlbum(albums);
// });

function renderAlbum (album){
  var albumHtml = 
  "        <!-- one album -->" +
  "        <div class='row album' data-album-id='" + album._id + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
  "                     <img src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Album Name: </h4>" +
  "                        <span class='album-name'>" + album.name + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name: </h4>" +
  "                        <span class='artist-name'>" +  album.artistName + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Release date:</h4>" +
  "                        <span class='album-releaseDate'>" + album.releaseDate + "</span>" +
  "                      </li>" +
    "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Genres: </h4>" +
  "                        <span class='album-releaseDate'>" + album.genres + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" + 
  "                </div>" +
  "                <!-- end of album internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "              </div>" +

  "            </div>" +
  "          </div>" +
  "          <!-- end one album -->";
  $('#albums').append(albumHtml);
}
    // render to the page with jQuery


  // var catList = $.get("https://ga-cat-rescue.herokuapp.com/api/cats").done(function(catList){
  //     var catListParsed = jQuery.parseJSON(catList);
  //     var fullCatList = [];
  //     for (var  i = 0; i < catListParsed.length; i++) {
  //         fullCatList.push(catListParsed[i].name);

});