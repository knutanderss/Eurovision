import React, {Component} from 'react';
import './App.css';
import FloatingCircles from './floating-circles'
import Fullscreen from "react-fullscreen-crossbrowser";
import WebSocket from "react-websocket";
import FlipMove from 'react-flip-move';
import ArtistList from './ArtistList';

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

  

  componentWillMount() {
    document.addEventListener("keydown", this._handleKeyDown.bind(this));
  }

  render() {

    return (
      <Fullscreen
        className="app"
        enabled={this.state.isFull}
        onChange={isFull => this.setState({isFull})}
        onClick={this.goFull}
        onKeyDown={this.add}>
        <FloatingCircles onClick={this.goFull}/>
        <header onKeyDown={this.add}>
          <h1 onClick={this.goFull}>Eurovision Scoreboard</h1>
        </header>
        <ArtistList/>
      </Fullscreen>
    );
  }
}

export default App;