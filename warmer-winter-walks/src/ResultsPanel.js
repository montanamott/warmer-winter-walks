import React, {useState} from 'react';
import { Button, Tabs, Tab, GridList, GridListTile } from '@material-ui/core';
// import './ResultsPanel.css';

function TabPanel(props) {
    let tileData = ["a", "b"];

    return(
        <div hidden={props.value !== props.index}>
            <GridList cellHeight={50} cols={1}>
            {tileData.map((tile) => (
                <GridListTile key={tile} cols={1}>
                    <p>{tile}</p>
                </GridListTile>
            ))}
            </GridList>
        </div>
    );
}

function ResultsPanel(props) {

    let [tabValue, setTabValue] = useState(0);
    
    function tabChange(event, index) {
        setTabValue(index);
    }

    function back() {
        props.setSearching(true);
    }
    
    return (
        <div>
            <Button variant="outlined" onClick={back}>Back to Search</Button>
            <br/><br/>
            <Tabs value={tabValue} onChange={tabChange} aria-label="simple tabs example">
                <Tab label="Warmer" />
                <Tab label="Faster" />
            </Tabs>
            <TabPanel value={tabValue} index={0}/>
            <TabPanel value={tabValue} index={1}/>
        </div>
    );
}

export default ResultsPanel;
