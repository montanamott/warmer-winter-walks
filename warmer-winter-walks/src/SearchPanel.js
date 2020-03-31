import React, { useState } from 'react';
import { Select, Input } from '@material-ui/core';
import * as constants from './Constants.js'
// import './SearchPanel.css';

function SearchPanel(props) {
    let [start, setStart] = useState("");
    let [destination, setDestination] = useState("");

    function search(event) {
        props.setSearching(false);
    }

    return (
        <div>
            <form onSubmit={search}>
                <label>
                    Select a starting point:
                    <br/>
                    <Select onChange={(event) => setStart(event.target.value)} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled> Choose a location... </option>
                        {Object.entries(constants.locations).map(([code, info]) => <option value={code}> {info.name} </option> )}
                    </Select>
                </label>
                <br/><br/>
                <label>
                    Select a destination:
                    <br/>
                    <Select onChange={(event) => setDestination(event.target.value)} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled> Choose a location... </option>
                        {Object.entries(constants.locations).map(([code, info]) => <option value={code}> {info.name} </option> )}
                    </Select>
                </label>
                <br/><br/>
                <Input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SearchPanel;
