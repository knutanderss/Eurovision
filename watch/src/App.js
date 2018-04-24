import React, { Component } from 'react';
import './App.css';
import FloatingCircles from './floating-circles'

class App extends Component {
  render() {

    const artists = Array(10).fill({
      country: 'Norway',
      name: 'Daniel Notland',
      song: 'My Heart Will Go On',
      score: 22
    });

    const artistList = artists.map((artist, i) => (
      <div key={i} className="artist-element">
        <img className="flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/no.svg" alt="flag" />
        <p className="artist-name">{(i+1) + '. ' + artist.name}</p>
        <p className="song-name">{artist.song}</p>
        <p className="score">{artist.score}</p>
      </div> 
    ))

    return (
      <div className="app">
        <FloatingCircles />
        <header>
          <h1>Eurovision Scoreboard</h1>
        </header>
        <div>
          {artistList}
        </div>
      </div>
    );
  }
}

export default App;
