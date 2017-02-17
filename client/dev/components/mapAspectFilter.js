import React, { Component } from 'react';
import { connect } from 'react-redux';
import AspectFilterPiece from './aspectFilterPiece'
import AspectFilterLetter from './aspectFilterLetter'
import axios from 'axios'

class MapAspectFilter extends Component {

  constructor(props){
    super(props);
    this.directionPieces = [
      {dir:"north", points: "200,0 225,145 200,200 175,145"},
      {dir:"northEast", points: "325,75 255,175 200,200 225,145"},
      {dir:"east", points: "400,200 255,175 200,200 255,225"},
      {dir:"southEast", points: "325,325 225,255 200,200 255,225"},
      {dir:"south", points: "200,400 175,255 200,200 225,255"},
      {dir:"southWest", points: "75,325 145,225 200,200 175,255" },
      {dir:"west", points: "0,200 145,175 200,200 145,225"},
      {dir:"northWest", points: "75,75 175,145 200,200 145,175"}
    ]
    this.directionLetters = [
      {dir:"north", letters: "N", x: "188", y: "-10"},
      {dir:"northEast", letters: "NE", x: "320", y: "60"},
      {dir:"east", letters: "E", x: "410", y: "210"},
      {dir:"southEast", letters: "SE", x: "320", y: "360"},
      {dir:"south", letters: "S", x: "190", y: "430"},
      {dir:"southWest", letters: "SW", x: "40", y: "360"},
      {dir:"west", letters: "W", x: "-35", y: "210"},
      {dir:"northWest", letters: "NW", x: "40", y: "60"}
    ]
  }

  componentWillMount(){
    axios.get('/currentState')
      .then( (response) => {
        if(response.status === 200){
          this.props.initializeServerState(response.data);
        }
      })
  }

  componentWillUpdate(props){
    axios.put('/updateState', props.filteredPoints);
  }
  render(){
    return(
      <div className="compass">
        <svg viewBox="-50 -50 500 500">  
          {this.directionPieces.map( (obj, index) => {
            return (
              <AspectFilterPiece
                selected={this.props.filteredPoints[obj.dir]}
                points={obj.points}
                id={obj.dir}
                clickHandler={this.props.clickHandler.bind(this, obj.dir)}
                key={index}
              />
            )
          })}
          {this.directionLetters.map( (obj, index) => {
            return (
               <AspectFilterLetter
                selected={this.props.filteredPoints[obj.dir]} 
                x={obj.x}
                y={obj.y}
                clickHandler={this.props.clickHandler.bind(this, obj.dir)} 
                letters={obj.letters}
                key={index}
              />
            )
          })}
        </svg>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filteredPoints: state.filteredPoints
  };
};

const mapDispatchToProps = dispatch => {
  return{
    clickHandler: direction => {
      dispatch({type: "CHANGE_FILTER", direction});
    },
    initializeServerState: serverState => {
      dispatch({type: "UPDATE_ALL", serverState})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapAspectFilter);