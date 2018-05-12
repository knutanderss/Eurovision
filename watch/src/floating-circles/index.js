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