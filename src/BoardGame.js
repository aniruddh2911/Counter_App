import React, { Component } from 'react';
import './BoardGame.css';

class BoardGame extends Component {

constructor () {
  super ()
  this.state = {
    number: 0
  }
}

changeNumber= () => {
  this.setState ({
    number: this.state.number + 1
  });
}

render() {

   const {number} = this.state;
    return (
      <div className="Board__Game">
        <div className="Number__Card">
           <h1>{number}</h1>
        </div>
        <div className="Number__Button">
           <button className="Board__Button" onClick={this.changeNumber}>Click Me</button>
        </div>
      </div>
    )
  }
}

export default BoardGame;