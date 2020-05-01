
//https://ro.umich.edu/calendars/schedule-of-classes/locations

export const locations = {
    "DC": {name: "Duderstadt Center", latlon: [42.291106, -83.715681], isBusStop: false},
    "PIER": {name: "Pierpont Commons", latlon: [42.291261, -83.717259], isBusStop: false},
    "CHRYS": {name: "Chrysler Center", latlon: [42.291146, -83.716733], isBusStop: false},
    "WDC": {name: "Walgreen Drama Center (STAMPS)", latlon: [42.291930,-83.717132], isBusStop: false},
    "BEYST": {name: "Bob and Betty Beyster Bldg", latlon: [42.293026, -83.716346], isBusStop: false},
    "DOW": {name: "H.H. Dow Bldg", latlon: [42.292974, -83.715436], isBusStop: false},
    "EECS": {name: "EECS Bldg", latlon: [42.292362, -83.714412], isBusStop: false},
    "GGBL": {name: "G.G. Brown Laboratory", latlon:[42.293144,  -83.714412], isBusStop: false},
    
    "BUS-BI": {name: "Bus: Bonisteel Inbound", latlon: [42.290454, -83.718086], isBusStop: true, stop: "N553", building: "PIER"},
    "BUS-BO": {name: "Bus: Bonisteel Outbound", latlon: [42.290205, -83.717757], isBusStop: true, stop: "N552", building: "PIER"},
    "BUS-MI": {name: "Bus: Murfin Inbound", latlon: [42.290669, -83.718585], isBusStop: true, stop: "N551", building: "PIER"},
    "BUS-MO": {name: "Bus: Murfin Outbound", latlon: [42.290827, -83.718413], isBusStop: true, stop: "N550", building: "PIER"},
    "BUS-CI": {name: "Bus: Cooley Lab Inbound", latlon: [42.290426, -83.713966], isBusStop: true, stop: "N403", building: "DC"},
    "BUS-CO": {name: "Bus: Cooley Lab Outbound", latlon: [42.290200, -83.713747], isBusStop: true, stop: "N404", building: "DC"},
    "BUS-FI": {name: "Bus: FXB Inbound", latlon: [42.293642, -83.712636], isBusStop: true, stop: "N405", building: "GGBL"},
    "BUS-FO": {name: "Bus: FXB Outbound", latlon: [42.293582, -83.712521], isBusStop: true, stop: "N406", building: "GGBL"}
}

export const stops = {
    "CHEZ": {name: "Chez Betty", location: "BEYST"},
    "MUJO": {name: "Mujo Cafe", location: "DC"},
    "PPFOOD": {name: "Pierpont Food (Panda, UGos, Fireside, etc...)", location: "PIER"}, 
}

export const initZoomLevel = 17; 
export const initLatLon = [42.292058, -83.715345];

export const southWestBound = [42.288645, -83.722244];
export const northEastBound = [42.295383, -83.709176];

// Only go right along this, so find earlier of start/end first then construct route traveling right. Reverse if you found the end first. 
export const warmMacroRoute = ['WDC', 'PIER', 'CHRYS', 'DC', 'EECS', 'GGBL', 'DOW', 'BEYST']; 

