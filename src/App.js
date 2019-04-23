import React from 'react';
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
      
      let watchedData = this.getWatchedData();

      let episodeCount = -1;
      seasonData.map((season) => episodeCount += season.length);

      let watchedCount = this.countWatchedEpisodes(watchedData);
      
      let todayDate = new Date().getTime();
      let lastDate = new Date('May 19, 2019 03:00:00').getTime();
      let daysLeft =  Math.round((lastDate - todayDate) / (1000 * 60 * 60 * 24));

      this.state = {
        episodeCount,
        seasonCount: seasonData.length,
        watchedCount,
        watchedData,
        todayDate,
        lastDate,
        daysLeft,
        episodesPerDay: (episodeCount - watchedCount) / daysLeft 
      }
      
      this.onEpisodeClick = this.onEpisodeClick.bind(this);
      this.countWatchedEpisodes = this.countWatchedEpisodes.bind(this);
    }

    getWatchedData() {
      let watchedData = localStorage.getItem('data');

      if(watchedData !== null && watchedData !== 'null') return JSON.parse(watchedData);
      
      return this.createEmptyWatched();
    }

    createEmptyWatched() {
      let watchedData = seasonData.map((season) => {
        return season.map((episode) => {
          return false
        });
      });

      return watchedData;
    }

    countWatchedEpisodes(watchedData) {
      let watchedCount = 0;
      watchedData.map((season) => {
        season.map((episode) => {
          if(episode) watchedCount++;
        })
      });

      return watchedCount;
    }

    onEpisodeClick(season, episode) {
      season--;
      let watchedData = this.state.watchedData;

      watchedData[season][episode] = !watchedData[season][episode];
      
      let watchedCount = this.countWatchedEpisodes(watchedData)

      this.setState({
        watchedData,
        watchedCount,
        episodesPerDay: (this.state.episodeCount - watchedCount) / this.state.daysLeft 
      });

      localStorage.setItem('data', JSON.stringify(watchedData));

    }

    render() {
      const seasons = this.state.watchedData.map((season, i) => {
        return <Season key={season + i} data={season} season={i + 1} onEpisodeClick={this.onEpisodeClick} />
      })

      return (
          <div>
            <h1>Game of Thrones Tracker</h1>
            <h2>You have watched {this.state.watchedCount} out of the {this.state.episodeCount} episodes. (Not including the last episode)</h2>
            <h2>If you wish to finish GoT before the last episode air, you will have to watch roughly {this.state.episodesPerDay} episodes per day.</h2>
            {seasons}
          </div>
      );
    }
}

export default App;
