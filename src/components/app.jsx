import React, { Component } from 'react';
import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
  render () {
    const gifs = [
      { id: "xT5LMzIK1AdZJ4cYW4" },
      { id: "8WdsK61D9YOOc" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="xT5LMzIK1AdZJ4cYW4/giphy" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
