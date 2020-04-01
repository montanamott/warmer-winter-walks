import React from 'react';
import './MapWrapper.css';
import { Map, TileLayer, Marker, Popup, Polyline, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import * as constants from './Constants';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// function getMarkerIcon(color) {
//   return new L.Icon({
//     iconUrl: (color === "green") ? require('./img/green_marker.svg.png') : require('./img/blue_marker.svg'),
//     iconRetinaUrl: (color === "green") ? require('./img/green_marker.svg.png') : require('./img/blue_marker.svg'),
//     iconAnchor: null,
//     popupAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     iconSize: new L.Point(60, 75),
//     className: 'leaflet-div-icon'
//   });
// }


// path prop is a list of keys representing the path to be rendered
function MapWrapper(props) {

  let markerList = []; 
  let circleList = []; 
  let currentRoute = null;
  let routeLine = null;

  currentRoute = (props.displayingWarm) ? props.warmRoute : props.fastRoute;

  if(!props.isSearching) {  
      markerList = currentRoute.filter((val, index) => index === 0 || index === currentRoute.length - 1).map((val, index) => 
        <Marker position={constants.locations[val].latlon} /*icon={(index === 0) ? getMarkerIcon("green") : getMarkerIcon("blue")}*/>
          <Popup> {constants.locations[val].name} </Popup>
        </Marker> );

      circleList = currentRoute.filter((val, index) => index !== 0 && index !== currentRoute.length - 1 && !(val in constants.stops)).map((val, index) => 
                  <Circle center={constants.locations[val].latlon} color={'red'} radius={4} />);

      routeLine = <Polyline positions={currentRoute.filter(val => !(val in constants.stops)).map(val => constants.locations[val].latlon)} color={'red'}/>;

      markerList.push(currentRoute.filter(val => val in constants.stops).map(val=> 
        <Marker position={constants.locations[constants.stops[val].location].latlon} /*icon={(index === 0) ? getMarkerIcon("green") : getMarkerIcon("blue")}*/>
          <Popup> {constants.stops[val].name} </Popup>
        </Marker> ));
  }
  else {   // Show all location markers
    markerList = Object.entries(constants.locations).map(([code, info]) =>
      <Marker position={info.latlon}>
            <Popup> {info.name} </Popup>
      </Marker>);
  }
  
  return (
    <Map center={constants.initLatLon} zoom={constants.initZoomLevel} maxBounds={[constants.southWestBound, constants.northEastBound]}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
        url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {/* Place markers on beginning and end of route */}
      {markerList}

      {/* Place circle dots in the middle of the route */}
      {circleList} 

      {/* Draw the lines of the route */}
      {routeLine}
    </Map>
  );
}

export default MapWrapper;
