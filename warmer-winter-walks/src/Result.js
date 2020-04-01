import React from 'react';
import './Result.css';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
import * as constants from "./Constants.js";

function Result(props) {
    let isIntermediateStop = (props.location in constants.stops);

    let intermediateStopText = isIntermediateStop ? "Intermediate Stop" : "";

    let locationName = isIntermediateStop ?
        constants.stops[props.location].name : constants.locations[props.location].name;
    
    let markerImgIfNeeded = (props.atEnd || isIntermediateStop) ?
        <ListItemIcon> <PlaceIcon /> </ListItemIcon> : "";

    return (
        <ListItem button>
            {markerImgIfNeeded}
            <ListItemText inset={!(props.atEnd || isIntermediateStop)} primary={locationName} secondary={intermediateStopText} />
        </ListItem>
    );
}

export default Result;