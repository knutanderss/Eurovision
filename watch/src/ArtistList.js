import React, {Component} from 'react';
import WebSocket from "react-websocket";
import FlipMove from 'react-flip-move';
import './App.css';


export default class ArtistList extends Component {
constructor(props) {
  super(props)

  this.state = {
     artists: []
  }
}

updateScore(data) {
    data = JSON.parse(data);
    const oldArtists = this.state.artists;
    const artists = oldArtists.map(artist => {
      artist.score = data[artist.country] || 0;
      return artist;
    });
    artists.sort((a, b) => b.score !== a.score ? b.score - a.score : a.draw - b.draw);
    this.setState({
      ...this.state,
      artists
    }); 
    console.log(this.state.artists);
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
        <div>
        <WebSocket url='ws://localhost:3000/watch' onMessage={this.updateScore.bind(this)}></WebSocket>
        <FlipMove duration={1500} esaing="ease-out" className="artist-list">
          {artistList}
        </FlipMove>
        </div>
    );
  }

}
