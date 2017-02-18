import React, { Component } from 'react';
import { connect } from 'react-redux';

const DirectionOutput = (props) => {
  const dirs = ["south", "southWest", "west", "northWest", "north", "northEast", "east", "southEast"]
  const letters = {
      north: 'N',
      northEast: 'NE',
      east: 'E',
      southEast: 'SE',
      south: 'S',
      southWest: 'SW',
      west: 'W',
      northWest: 'NW'
    }
  let left = '';
  let leftIndex = dirs.length + 1
  let right = '';
  let rightIndex = -1;
  for(let key in props.filteredPoints){
    if(props.filteredPoints[key]){
      let index = dirs.indexOf(key)
      if(index < leftIndex){
        leftIndex = index;
        left = key
      }
      if(index > rightIndex){
        rightIndex = index;
        right = key;
      }
    }
  } 
  let range = left === '' ? right === '' ? 'ALL' : letters[right] : right === '' || left === right ? letters[left] : `${letters[left]} - ${letters[right]}`

  return <span className="range">{range}</span>
}



const mapStateToProps = state => {
  return {
    filteredPoints: state.filteredPoints
  };
};

export default connect(mapStateToProps, null)(DirectionOutput);
