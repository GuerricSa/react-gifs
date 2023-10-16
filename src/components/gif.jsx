import React, { Component } from 'react';

class Gif extends Component {
  render () {
    const source = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
    return <img src={source} alt="" className="gif" />;
  }
}

export default Gif;
