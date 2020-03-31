import React, { useState } from 'react';
import './RightPanel.css';
import ResultsPanel from './ResultsPanel';
import SearchPanel from './SearchPanel';

function RightPanel() {

    let [isSearching, setSearching] = useState(true);
    let innerPanel;

    if (isSearching) {
        innerPanel = <SearchPanel setSearching={setSearching}></SearchPanel>;
    }
    else {
        innerPanel = <ResultsPanel setSearching={setSearching}></ResultsPanel>;
    }
    return (
        <div id="right-panel">
            <div id="logo-div">
                <h1>Warmer Winter Walks</h1>
            </div>
            {innerPanel}
        </div>
    )

    function switchPanel() {
        setSearching(!isSearching);
    }
}

export default RightPanel;
