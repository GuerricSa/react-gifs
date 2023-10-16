import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.displayFonction(event.target.id);
  };

  render () {
    const source = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
    return <img
      src={source}
      alt=""
      className="gif"
      onClick={this.handleClick}
      id={this.props.id}
    />;
  }
}

export default Gif;
