import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: "xT5LMzIK1AdZJ4cYW4"
    };
  }

  displayGif = (id) => {
    this.setState({
      selectedGif: id
    });
  };

  search = (query) => {
    giphy('dFFOvzsbuJ3IR42UBJIHSWvWGP9XTYcb').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  };

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFonction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} displayFunction={this.displayGif} />
        </div>
      </div>
    );
  }
}

export default App;
