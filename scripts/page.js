// Map of official building abbreviations: https://ro.umich.edu/calendars/schedule-of-classes/locations
//                            to lattitude and longitude

 namesToLatLon = {"DC": L.latLng(42.291279,-83.715715), 
                  "PIER": L.latLng(42.291303,-83.717344), 
                  "CHRYS": L.latLng(42.291041,-83.716735), 
                  "WDC": L.latLng(42.291930,-83.717132)
                  
           };

// End Map data structure 

// Helper functions
  function drawMarkerOnBuilding(map, buildAbbr) {
    if(buildAbbr in namesToLatLon) {
      let marker = L.marker(namesToLatLon[buildAbbr]).addTo(map);
    }
    else {
      console.log("ERROR: Tried to use unidentified building.")
    }
  }

  // function drawLineBetweenBuildings(map, firstBuilding, secondBuilding) {
  //    
  // }
  //


// Main functionality
$(document).ready( function() {
  
  let southWest = L.latLng(42.287612,-83.719827),
    northEast = L.latLng(42.295159,-83.708226),
    bounds = L.latLngBounds(southWest, northEast);

  let map = L.map( 'map', {
    maxBounds: bounds, 
    minZoom: 17,  // Then add it here..
  }).setView([42.291971,-83.714273], 17);

  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c'],
    maxNativeZoom: 19,
    maxZoom: 21,
  }).addTo( map );

  let marker = L.marker([42.292, -83.7159]).addTo(map);
  marker.bindPopup("<b>Hello world!</b><br>I am a popup. <div style='background-color: red'> How fucking crazy can I get? </div>").openPopup();

  drawMarkerOnBuilding(map, "WDC");

  console.log('Am I caching?');


  map.fitBounds(bounds);
    

  setTimeout(function(){ map.invalidateSize(); console.log('Hello!z')}, 1000);

});


// Right Panel
let rightPanelContainer = new Vue({
  el: "#right-panel",
  data: { 
    isSearching: true,
  },
  methods: {}
})

let searchVue = new Vue({
  el: "#search-panel",
  data: {
    selected: null,
    options: [
      { value: "yes", text: "no"},
    ]
  },
  methods: {}
})

let resultsVue = new Vue({
  el: "#results-panel",
  data: {},
  methods: {}
})

