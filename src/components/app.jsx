import React, { Component } from 'react';
import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
  state = {
    gifs: [],
    selectedGif: "xT5LMzIK1AdZJ4cYW4"
  }

  search = (query) => {

  };

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
