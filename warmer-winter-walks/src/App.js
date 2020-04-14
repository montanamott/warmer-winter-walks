import React, { useState } from 'react';
import MapWrapper from './MapWrapper';
import RightPanel from './RightPanel';
import * as constants from './Constants';
import './App.css';

function App() {
  // route is an ordered list of location abbreviations
  let [warmRoute, setWarmRoute] = useState([]);
  let [fastRoute, setFastRoute] = useState([]);
  let [isSearching, setSearching] = useState(true);
  let [displayingWarm, setDisplayingWarm] = useState(true);
  let [resultMouseEnter, setResultMouseEnter] = useState("");
  let [resultMouseLeave, setResultMouseLeave] = useState("");

  function getPathSection(start, destination) {
    //if (start === destination) return [start];

    let route = [];
    let startIndex = -1; 
    let destIndex = -1; 

    constants.warmMacroRoute.forEach( (element, index) => {
      if (element === start) {
        startIndex = index;
      }
      if (element === destination) {
        destIndex = index;
      }
    });
    
    if(destIndex < startIndex) {
      route = constants.warmMacroRoute.slice(destIndex, startIndex + 1).reverse();
    } else {
      route = constants.warmMacroRoute.slice(startIndex, destIndex + 1);
    }

    return route;
  }

  function calculateNewRoute(start, destination, stop) {
    //let tempWarmRoute = ["BUS-BO", "PIER", "CHRYS", "DC", "MUJO", "EECS", "GGBL", "DOW", "BEYST"];
    //let tempFastRoute = ["PIER", "DC", "MUJO", "BEYST"];
    let calculatedFastRoute;
    let calculatedWarmRoute;
    let startBuilding;
    let destBuilding;

    // set startBuilding and destBuilding to be bus stop's building
    if (constants.locations[start].isBusStop) {
      startBuilding = constants.locations[start].building;
    }
    else startBuilding = start;
    if (constants.locations[destination].isBusStop) {
      destBuilding = constants.locations[destination].building;
    }
    else destBuilding = destination;

    if (!!stop && stop !== "None") {   // intermediate stop
      calculatedFastRoute = [startBuilding, constants.stops[stop].location, stop, destBuilding];
      calculatedWarmRoute = getPathSection(startBuilding, constants.stops[stop].location);
      calculatedWarmRoute.push(stop);
      //calculatedWarmRoute = calculatedWarmRoute.concat(getPathSection(constants.stops[stop].location, destBuilding).slice(1));
      calculatedWarmRoute = calculatedWarmRoute.concat(getPathSection(constants.stops[stop].location, destBuilding));
    }
    else {
      calculatedFastRoute = [startBuilding, destBuilding];
      calculatedWarmRoute = getPathSection(startBuilding, destBuilding);
    }
    
    if (startBuilding !== start) {
      calculatedWarmRoute.unshift(start);
      calculatedFastRoute.unshift(start);
    }
    if (destBuilding !== destination) {
      calculatedWarmRoute.push(destination);
      calculatedFastRoute.push(destination);
    }



    setWarmRoute(calculatedWarmRoute);
    setFastRoute(calculatedFastRoute);
  }

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <MapWrapper
        warmRoute={warmRoute}
        fastRoute={fastRoute}
        isSearching={isSearching}
        displayingWarm={displayingWarm}
        resultMouseEnter={resultMouseEnter}
        setResultMouseEnter={setResultMouseEnter}
        resultMouseLeave={resultMouseLeave}
        setResultMouseLeave={setResultMouseLeave}>   
      </MapWrapper>
      <RightPanel
        warmRoute={warmRoute}
        fastRoute={fastRoute}
        calculateNewRoute={calculateNewRoute}
        isSearching={isSearching}
        setSearching={setSearching}
        displayingWarm={displayingWarm}
        setDisplayingWarm={setDisplayingWarm}
        setResultMouseEnter={setResultMouseEnter}
        setResultMouseLeave={setResultMouseLeave}>
      </RightPanel>
    </div>
  );
}

export default App;
