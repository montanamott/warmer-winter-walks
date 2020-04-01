import React, { useState } from 'react';
import { Select, Input, MenuItem } from '@material-ui/core';
import * as constants from './Constants'
// import './SearchPanel.css';

function SearchPanel(props) {
    let [start, setStart] = useState("");
    let [destination, setDestination] = useState("");
    let [stop, setStop] = useState("");

    function search(event) {
        props.calculateNewRoute(start, destination, stop);
        props.setSearching(false);
    }

    return (
        <div>
            <form onSubmit={search}>
                <label>
                    Select a starting point:
                    <br/>
                    <Select onChange={(event) => setStart(event.target.value)} defaultValue={'DEFAULT'}>
                        <MenuItem value="DEFAULT" disabled> Choose a location... </MenuItem>
                        {Object.entries(constants.locations).map(([code, info]) => <MenuItem value={code}> {info.name} </MenuItem> )}
                    </Select>
                </label>
                <br/><br/>
                <label>
                    Select a stop on the way (optional):
                    <br/>
                    <Select onChange={(event) => (event.target.value === "DEFAULT") ?  setStop(event.target.value) : ""} defaultValue={"DEFAULT"}>
                        <MenuItem value="DEFAULT"> None </MenuItem>
                        {Object.entries(constants.stops).map(([code, info]) => <MenuItem value={code}> {info.name} </MenuItem> )}
                    </Select>
                </label>
                <br/><br/>
                <label>
                    Select a destination:
                    <br/>
                    <Select onChange={(event) => setDestination(event.target.value)} defaultValue={'DEFAULT'}>
                        <MenuItem value="DEFAULT" disabled> Choose a location... </MenuItem>
                        {Object.entries(constants.locations).map(([code, info]) => <MenuItem value={code}> {info.name} </MenuItem> )}
                    </Select>
                </label>
                <br/><br/>
                <Input type="submit" value="Submit" disabled={start === "" || destination === "" || start === destination} />
            </form>
        </div>
    );
}

export default SearchPanel;
