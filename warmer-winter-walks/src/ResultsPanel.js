import React from 'react';
import Result from './Result';
import './ResultsPanel.css';
import { Button, Tabs, Tab, List } from '@material-ui/core';
function TabPanel(props) {

    return(
        <div className="tabpanel-div" hidden={props.displayWhenWarm !== props.value}>
            <List style={{maxHeight: '100%', overflow: 'auto'}}>
            {props.route.map((location, index) => (
                <Result
                    location={location}
                    atEnd={(index === 0 || index === props.route.length - 1)}
                    setResultMouseEnter={props.setResultMouseEnter}
                    setResultMouseLeave={props.setResultMouseLeave}
                />
            ))}
            </List>
        </div>
    );
}

function ResultsPanel(props) {
    
    function tabChange(event, index) {
        props.setDisplayingWarm(index === 0 ? true : false);
    }

    function back() {
        props.setSearching(true);
    }
    
    return (
        <div id="results-panel-div">
            <Button id="back-button" variant="outlined" onClick={back}>Back to Search</Button>
            <br/><br/>

            <Tabs onChange={tabChange} value={(props.displayingWarm) ? 0 : 1} aria-label="simple tabs example">
                <Tab label="Warmer" />
                <Tab label="Faster" />
            </Tabs>
            <div id="div-around-tabpanel">
                <TabPanel
                    route={props.warmRoute}
                    value={props.displayingWarm}
                    setResultMouseEnter={props.setResultMouseEnter}
                    setResultMouseLeave={props.setResultMouseLeave}
                    displayWhenWarm={true}
                />
                <TabPanel
                    route={props.fastRoute}
                    value={props.displayingWarm}
                    setResultMouseEnter={props.setResultMouseEnter}
                    setResultMouseLeave={props.setResultMouseLeave}
                    displayWhenWarm={false}
                />
            </div>
        </div>
    );
}

export default ResultsPanel;
