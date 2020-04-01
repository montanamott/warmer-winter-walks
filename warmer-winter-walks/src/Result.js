import React from 'react';
//import markerIcon from './img/marker-icon.png';
import './Result.css';
import * as constants from "./Constants.js";
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';

function Result(props) {
    let isIntermediateStop = (props.location in constants.stops);

    let intermediateStopText = isIntermediateStop ? "Intermediate Stop" : "";

    let locationName = isIntermediateStop ?
        constants.stops[props.location].name : constants.locations[props.location].name;
    
    let markerImgIfNeeded = (props.needMarker) ?
        <ListItemIcon> <PlaceIcon /> </ListItemIcon> : "";

    return (
        <ListItem button>
            {markerImgIfNeeded}
            <ListItemText inset={!props.needMarker} primary={locationName} secondary={intermediateStopText} />
        </ListItem>
    );
}

export default Result;