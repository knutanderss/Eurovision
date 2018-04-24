import React, { Component } from 'react'
import "./style.css";
import random from 'node-random-number'

class FloatingCircles extends Component {

  constructor(props) {
    super(props)
    this.state = {circles: []}
  }

  componentDidMount() {
    let circles = []
    for (let i=0; i<100; i++) {
      const x = random({start: 0, end: 100})
      const y = random({start: 0, end: 100})
      const r = random({start: 10, end: 100})
      circles.push(<circle cx={x + '%'} cy={y + '%'} r={r} fill="rgba(255, 255, 255, 0.04)"></circle>)
    }
    this.setState({circles})
  }

  render() {
    return (
      <svg className="circles" height="100%" width="100%">
        {this.state.circles}
      </svg>
    )
  }
}

export default FloatingCircles