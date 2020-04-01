import React, { useState } from 'react';
import MapWrapper from './MapWrapper';
import RightPanel from './RightPanel';
import './App.css';

function App() {
  // route is an ordered list of location abbreviations
  let [warmRoute, setWarmRoute] = useState([]);
  let [fastRoute, setFastRoute] = useState([]);
  let [isSearching, setSearching] = useState(true);
  let [displayingWarm, setDisplayingWarm] = useState(true);

  function calculateNewRoute(start, destination, stop) {
    let tempWarmRoute = ["PIER", "CHRYS", "DC", "MUJO", "EECS", "GGBL", "DOW", "BEYST"];
    let tempFastRoute = ["PIER", "DC", "MUJO", "BEYST"];

    setWarmRoute(tempWarmRoute);
    setFastRoute(tempFastRoute);
  }

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <MapWrapper
        warmRoute={warmRoute}
        fastRoute={fastRoute}
        isSearching={isSearching}
        displayingWarm={displayingWarm}>    
      </MapWrapper>
      <RightPanel
        warmRoute={warmRoute}
        fastRoute={fastRoute}
        calculateNewRoute={calculateNewRoute}
        isSearching={isSearching}
        setSearching={setSearching}
        displayingWarm={displayingWarm}
        setDisplayingWarm={setDisplayingWarm}>
      </RightPanel>
    </div>
  );
}

export default App;
