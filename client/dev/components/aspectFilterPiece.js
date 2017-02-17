import React from 'react';

const AspectFilterPiece = (props) => {
  return (
    <polygon
      className={props.selected ? "piece selected" : "piece"} 
      id={props.id} 
      points={props.points}
      onClick={props.clickHandler}
    />
  )
}

export default AspectFilterPiece;