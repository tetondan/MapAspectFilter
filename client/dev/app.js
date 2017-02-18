import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapAspectFilter from './components/mapAspectFilter'
import DirectionOutput from './components/directionOutput'

export default class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="tab">
          <span className="tag">ASPECT</span><DirectionOutput />
        </div>
        <div className="compass">
          <MapAspectFilter />
        </div>
        <div className="instructionFooter">
          <span className="instructions">Click on the compass or direction to select</span>
        </div>
      </div>
    )
  }
}
