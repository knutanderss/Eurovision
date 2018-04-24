import React, { Component } from 'react';
import './App.css';
import FloatingCircles from './floating-circles'
import Fullscreen from "react-fullscreen-crossbrowser";

class App extends Component {

  constructor(props) {
    super();
 
    this.state = {
      isFull: false,
      artists: []
    };
  }

  _handleKeyDown (event) {
    if (event.key === 'f') {
      this.setState({isFull: !this.state.isFull})
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this._handleKeyDown.bind(this));
  }

  componentDidMount() {
    console.log(process.env)
    fetch((process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '') + '/artists')
      .then(result => result.json())
      .then(artists => this.setState({
        ...this.state,
        artists: artists.map(a => a.artist)
      }))
      .catch(console.log)
  }

  render() {
    const artistList = this.state.artists.map((artist, i) => (
      <div key={artist.name} className="artist-element">
        <img className="flag" src={"https://lipis.github.io/flag-icon-css/flags/4x3/" + artist.abbr + ".svg"} alt="flag" />
        <p className="artist-name">{(i+1) + '. ' + artist.country}</p>
        <p className="song-name">{artist.name + " - " + artist.song}</p>
        <p className="score">{artist.score || 0}</p>
      </div> 
    ))

    return (
      <Fullscreen 
        className="app" 
        enabled={this.state.isFull}
        onChange={isFull => this.setState({isFull})} 
        onClick={this.goFull}
        onKeyDown={this.add}
      >
        <FloatingCircles onClick={this.goFull} />
        <header  onKeyDown={this.add}>
          <h1 onClick={this.goFull}>Eurovision Scoreboard</h1>
        </header>
        <div className="artist-list">
          {artistList}
        </div>
      </Fullscreen>
    );
  }
}

export default App;
