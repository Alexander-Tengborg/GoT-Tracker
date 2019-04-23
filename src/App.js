import React from 'react';
import logo from './logo.svg';
import './App.css';

import Season from './Season';

const seasonData = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6]
] 


class App extends React.Component {
    constructor(props) {
      super(props);
      
      let count = 0;
      seasonData.map((season) => count += season.length);

      this.state = {
        episodeCount: count,
        seasonCount: seasonData.length,
        watchedCount: 0
      }
    }

    render() {
      const seasons = seasonData.map((season, i) => {
        return <Season data={season} season={i} />
      })

        return (
            <div>
              <h1>Game of Thrones Tracker</h1>
              <h2>There are {this.state.seasonCount} seasons and {this.state.episodeCount} episodes of Game of Thrones.</h2>
              <h2>You have watched {this.state.watchedCount} out of the {this.state.episodeCount} episodes.</h2>
              {seasons}
            </div>
        );
    }
}

export default App;
