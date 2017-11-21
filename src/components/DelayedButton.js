// Code DelayedButton Component Here
import React from 'react'; //importing library
import ReactDOM from 'react-dom';

class DelayedButton extends React.Component{

  click = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)}, this.props.delay)
    }

  render(){
    return(
    <button onClick={this.click}>Delay</button>
    )
  }

}


export default DelayedButton;
