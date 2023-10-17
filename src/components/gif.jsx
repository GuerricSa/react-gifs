import React, { Component } from 'react';

class Gif extends Component {
  // Don't call render if props.id not changes
  shouldComponentUpdate(nextProps, nextState) {
    const id = this.props;

    return nextProps.id !== id;
  }

  handleClick = (event) => {
    this.props.displayFunction(event.target.id);
  };

  render () {
    const id = this.props;

    if (!id) {
      return null;
    }

    const source = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img
        src={source}
        alt=""
        className="gif"
        onClick={this.handleClick}
        id={this.props.id}
      />
    );
  }
}

export default Gif;
