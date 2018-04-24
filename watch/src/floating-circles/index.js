import React, { Component } from 'react'
import "./style.css";
import random from 'node-random-number'
import Particles from 'react-particles-js'
import particlesjsConfig from './particlesjs-config'

class FloatingCircles extends Component {

  constructor(props) {
    super(props)
    this.state = {
      circles: [],
      height: 0
    }
  }

  componentDidMount() {
    let circles = []
    for (let i=0; i<400; i++) {
      const x = random({start: 0, end: 100})
      const y = random({start: 0, end: 100})
      const r = random({start: 10, end: 100})
      circles.push(<circle key={i} cx={x + '%'} cy={y + '%'} r={r} fill="rgba(255, 255, 255, 0.04)"></circle>)
    }
    this.setState({circles})
  }

  render() {
    return (
      /*
      <svg className="particles">
        {this.state.circles}
      </svg>
      */
      <Particles 
        className="particles" 
        params={particlesjsConfig}
      />
    )
  }
}

export default FloatingCircles