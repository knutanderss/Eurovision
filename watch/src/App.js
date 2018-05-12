import React, {Component} from 'react';
import './App.css';
import FloatingCircles from './floating-circles'
import Fullscreen from "react-fullscreen-crossbrowser";
import WebSocket from "react-websocket";
import FlipMove from 'react-flip-move';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      isFull: false,
      artists: [],
      endpoint: "http://localhost:3000/watch" //CHANGE
    };
  }

  _handleKeyDown(event) {
    if (event.key === 'f') {
      this.setState({
        ...this.state,
        isFull: !this.state.isFull,
      })
    }
  }

  updateScore(data) {
    data = JSON.parse(data);
    const oldArtists = this.state.artists;
    const artists = oldArtists.map(artist => {
      artist.score = data[artist.country] || 0;
      return artist;
    });
    artists.sort((a, b) => b.score - a.score);
    this.setState({
      ...this.state,
      artists
    }); 
    console.log(this.state.artists);
  }

  componentWillMount() {
    document.addEventListener("keydown", this._handleKeyDown.bind(this));
  }

  componentDidMount() {
    fetch((process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : '') + '/artists')
      .then(result => result.json())
      .then(artists => this.setState({
        ...this.state,
        artists: artists
      }))
      .catch(console.log)
  }

  render() {
    const artistList = this
      .state
      .artists
      .map((artist, i) => (
        <div key={artist.name} className="artist-element">
          <img
            className="flag"
            src={"https://lipis.github.io/flag-icon-css/flags/4x3/" + artist.abbr + ".svg"}
            alt="flag"/>
          <p className="artist-name">{(i + 1) + '. ' + artist.country}</p>
          <p className="song-name">{artist.song}</p>
          <p className="score">{ artist.score || 0}</p>
        </div>
      ))

    return (
      <Fullscreen
        className="app"
        enabled={this.state.isFull}
        onChange={isFull => this.setState({isFull})}
        onClick={this.goFull}
        onKeyDown={this.add}>
        <WebSocket url='ws://localhost:3000/watch' onMessage={this.updateScore.bind(this)}></WebSocket>
        <FloatingCircles onClick={this.goFull}/>
        <header onKeyDown={this.add}>
          <h1 onClick={this.goFull}>Eurovision Scoreboard</h1>
        </header>
        <FlipMove duration={1500} esaing="ease-out" className="artist-list">
          {artistList}
        </FlipMove>
      </Fullscreen>
    );
  }
}

export default App;