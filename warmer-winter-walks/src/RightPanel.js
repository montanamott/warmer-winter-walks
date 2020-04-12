import React from 'react';
import './RightPanel.css';
import ResultsPanel from './ResultsPanel';
import SearchPanel from './SearchPanel';

function RightPanel(props) {

    let innerPanel;

    if (props.isSearching) {
        innerPanel = <SearchPanel
                        setSearching={props.setSearching}
                        calculateNewRoute={props.calculateNewRoute}>
                    </SearchPanel>;
    }
    else {
        innerPanel = <ResultsPanel
                        setSearching={props.setSearching}
                        warmRoute={props.warmRoute}
                        fastRoute={props.fastRoute}
                        displayingWarm={props.displayingWarm}
                        setDisplayingWarm={props.setDisplayingWarm}
                        setResultMouseEnter={props.setResultMouseEnter}
                        setResultMouseLeave={props.setResultMouseLeave}>
                    </ResultsPanel>;
    }
    return (
        <div id="right-panel">
            <div id="logo-div">
                <h1>Warmer Winter Walks</h1>
            </div>
            {innerPanel}
        </div>
    );
}

export default RightPanel;
