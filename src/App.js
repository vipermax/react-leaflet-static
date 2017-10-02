import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class App extends Component {
  render() {

    const position = [51.505, -0.09];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Map center={position} zoom={13}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup.<br />Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>

      </div>
    );
  }
}

export default App;
