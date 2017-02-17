import React from 'react';

const AspectFilterLetter = (props) => {
  return (
    <text
      className={props.selected ? "directionLetter selected" : "directionLetter"} 
      x={props.x}
      y={props.y}
      onClick={props.clickHandler}
    >{props.letters}</text>
  )
}

export default AspectFilterLetter;
