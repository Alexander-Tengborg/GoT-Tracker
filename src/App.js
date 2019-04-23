import React from 'react';
import logo from './logo.svg';
import './App.css';

import Season from './Season';

const seasonData = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6]
] 


class App extends React.Component {
    render() {
      const seasons = seasonData.map((season) => {
        return <Season data={season}/>
      })

        return (
            <div>
              {seasons}
            </div>
        );
    }
}

export default App;
