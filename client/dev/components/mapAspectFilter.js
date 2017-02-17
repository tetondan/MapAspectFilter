import React, { Component } from 'react';
import { connect } from 'react-redux';
import AspectFilterPiece from './aspectFilterPiece'

class MapAspectFilter extends Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="compass">
        <svg viewBox="-50 -50 500 500">  

          <AspectFilterPiece
            selected={this.props.filteredPoints.north}
            points="200,0 225,145 200,200 175,145"
            id="north"
            clickHandler={this.props.clickHandler.bind(this, 'north')}
          />
          <text x="188" y="-10" 
            className={this.props.filteredPoints.north ? "dir selected" : "dir"} 
            onClick={this.props.clickHandler.bind(this, 'north')} >N</text>
      
          <polygon 
            className={this.props.filteredPoints.northEast ? "piece selected" : "piece"} 
            id="northeast" 
            points="325,75 255,175 200,200 225,145" 
            onClick={this.props.clickHandler.bind(this, 'northEast')} 
          />
          <text x="320" y="60" 
            className={this.props.filteredPoints.northEast ? "dir selected" : "dir"} 
            onClick={this.props.clickHandler.bind(this, 'northEast')} >NE</text>
          
          <polygon 
            className={this.props.filteredPoints.east ? "piece selected" : "piece"} 
            id="east" 
            points="400,200 255,175 200,200 255,225" 
            onClick={this.props.clickHandler.bind(this, 'east')}
          />
          <text x="410" y="210" 
            className={this.props.filteredPoints.east ? "dir selected" : "dir"} 
            onClick={this.props.clickHandler.bind(this, 'east')}>E</text>
          
          <polygon 
            className={this.props.filteredPoints.southEast ? "piece selected" : "piece"} 
            id="southeast" 
            points="325,325 225,255 200,200 255,225" 
            onClick={this.props.clickHandler.bind(this, 'southEast')}
          />
          <text x="320" y="360" 
            className={this.props.filteredPoints.southEast ? "dir selected" : "dir"} 
            onClick={this.props.clickHandler.bind(this, 'southEast')}>SE</text>
          
          <polygon 
            className={this.props.filteredPoints.south ? "piece selected" : "piece"} 
            id="south"
            points="200,400 175,255 200,200 225,255" 
            onClick={this.props.clickHandler.bind(this, 'south')}
          />
          <text x="190" y="430" 
            className={this.props.filteredPoints.south ? "dir selected" : "dir"} 
            onClick={this.props.clickHandler.bind(this, 'south')}>S</text>
          
          <polygon 
            className={this.props.filteredPoints.southWest ? "piece selected" : "piece"} 
            id="southwest" 
            points="75,325 145,225 200,200 175,255" 
            onClick={this.props.clickHandler.bind(this, 'southWest')}
          />
          <text x="40" y="360" 
            className={this.props.filteredPoints.southWest ? "dir selected" : "dir"} 
            onClick={this.props.clickHandler.bind(this, 'southWest')}>SW</text>
          
          <polygon 
            className={this.props.filteredPoints.west ? "piece selected" : "piece"} 
            id="west"
            points="0,200 145,175 200,200 145,225" 
            onClick={this.props.clickHandler.bind(this, 'west')}
          />
          <text x="-35" y="210" 
            className={this.props.filteredPoints.west ? "dir selected" : "dir"} 
            onClick={this.props.clickHandler.bind(this, 'west')}>W</text>
          
          <polygon 
            className={this.props.filteredPoints.northWest ? "piece selected" : "piece"} 
            id="northwest" 
            points="75,75 175,145 200,200 145,175" 
            onClick={this.props.clickHandler.bind(this, 'northWest')}
          />
          <text x="40" y="60" 
            className={this.props.filteredPoints.northWest ? "dir selected" : "dir"} 
            onClick={this.props.clickHandler.bind(this, 'northWest')}>NW</text>
        
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapAspectFilter);