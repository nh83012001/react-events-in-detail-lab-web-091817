// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class CoordinatesButton extends React.Component{

  click = (event) => {
    event.persist()
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return (
    <button onClick={this.click}>Coord</button>
    )
  }
}

export default CoordinatesButton;
