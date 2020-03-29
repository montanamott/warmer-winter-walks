
////  Functional Code  ////

// Main
$(document).ready( function() {
  console.log("Ready!");
  
  var southWest = L.latLng(42.289601, -83.719704),
    northEast = L.latLng(42.294299, -83.711673),
    bounds = L.latLngBounds(southWest, northEast);


  var map = L.map( 'map', {
    maxBounds: bounds, 
    minZoom: 17,  // Then add it here..
}).setView([42.292, -83.7159], 18);

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c'],
    maxNativeZoom: 19,
    maxZoom: 21,
}).addTo( map );

map.fitBounds(bounds);
  




setTimeout(function(){ map.invalidateSize(); console.log('Hello!z')}, 1000);









});


