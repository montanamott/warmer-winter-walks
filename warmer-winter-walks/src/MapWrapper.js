import React, { useState } from 'react';
import './MapWrapper.css';
import { Map, TileLayer, Marker, Popup, Polyline, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import * as constants from './Constants.js';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


function MapWrapper() {
  // let [drawnRoutes, setDrawnRoutes] = useState([sfgdsfsdfsf]);

  // setDrawnRoutes([...drawnRoutes, newThing]);
  let path = [constants.locations["PIER"].latlon, constants.locations["BEYST"].latlon, constants.locations["DOW"].latlon, constants.locations["GGBL"].latlon];

  return (
    <Map center={constants.initLatLon} zoom={constants.initZoomLevel} maxBounds={[constants.southWestBound, constants.northEastBound]}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
        url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {/* Place markers on all map locations */}
      {path.filter((val, index) => index == 0 || index == path.length - 1).map(val => 
        <Marker position={val}>
          <Popup> {val} </Popup>
      </Marker> ) }


      {path.filter((val, index) => index != 0 && index != path.length - 1).map((val, index) => <Circle center={val} color={'red'} radius={4} />)}


        <Polyline positions={path} color={'red'}/> 
    </Map>
  );
}

export default MapWrapper;
