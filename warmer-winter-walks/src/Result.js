import React, { useState } from 'react';
import './Result.css';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
import * as constants from "./Constants.js";

function Result(props) {

    let isIntermediateStop = (props.location in constants.stops);

    let initBusInfo = (!isIntermediateStop && constants.locations[props.location].isBusStop)
        ? "Loading MagicBus Info..." : "";

    let [resultSelected, setResultSelected] = useState(false);
    let [busInfo, setBusInfo] = useState(initBusInfo);

    let intermediateStopText = isIntermediateStop ? "Intermediate Stop" : "";

    let locationName = isIntermediateStop ?
        constants.stops[props.location].name : constants.locations[props.location].name;
    
    let markerImgIfNeeded = (props.atEnd || isIntermediateStop) ?
        <ListItemIcon> <PlaceIcon /> </ListItemIcon> : "";
    

    function resultEnterHandler() {
        props.setResultMouseEnter(props.location);
        setResultSelected(true);
    }
    function resultLeaveHandler() {
        props.setResultMouseLeave(props.location);
        setResultSelected(false);
    }



    function permSetBusInfo(info) {
        let temp = props.fetched;
        temp[constants.locations[props.location].stop] = info;
        //console.log("In perm, setting fetched to ", temp);
        props.setFetched(temp);
        setBusInfo(temp);
    }

    function parseMagicBusJson(response) {
        //console.log("in parse, response = ", response);
        if ("error" in response) {
            permSetBusInfo("MagicBus Error: " + JSON.stringify(response.error[0]));
        }
        else {
            let predictions = response.prd;
            let info = [<><b>MagicBus Predictions:</b><br/></>];
            console.log("predictions = ", predictions);
            predictions.forEach((prd) => {
                console.log("prd = ", prd);
                console.log("prd.prdtim = ", prd.prdtm);
                info.push(<>{prd.rt + ": " + prd.prdtm.slice(9)}<br/></>);
            })
            permSetBusInfo(info);
        }
    }

    if (!isIntermediateStop && constants.locations[props.location].isBusStop) {
        // If this bus stop hasn't had its info fetched yet
        if (!(constants.locations[props.location].stop in props.fetched)) {
            //console.log("in if, fetched = ", props.fetched);

            fetch("http://localhost:8000/" + constants.locations[props.location].stop)
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                //console.log(result);
                parseMagicBusJson(result["bustime-response"]);
            });

            let temp = props.fetched;
            temp[constants.locations[props.location].stop] = "Loading MagicBus Info...";
            //console.log("In if, setting fetched to ", temp);
            props.setFetched(temp);
        }
        else {
            //console.log("in else, busInfo = " + busInfo);
            //console.log("in else, longboi = " + props.fetched[constants.locations[props.location].stop]);
            if (busInfo !== props.fetched[constants.locations[props.location].stop]) {
                //console.log("in if in else");
                setBusInfo(props.fetched[constants.locations[props.location].stop]);
            }
        }
    }




    return (
        <ListItem selected={resultSelected} onMouseEnter={resultEnterHandler} onMouseLeave={resultLeaveHandler}>
            {markerImgIfNeeded}
            <ListItemText
                inset={!(props.atEnd || isIntermediateStop)}
                primary={locationName}
                secondary={isIntermediateStop ? intermediateStopText : busInfo} />
        </ListItem>
    );
}

export default Result;