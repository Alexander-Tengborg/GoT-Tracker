import React from 'react';
import './Season.css';

import Episode from './Episode';

class Season extends React.Component {
    constructor(props) {
        super(props);

        this.onEpisodeClick = this.onEpisodeClick.bind(this);
    }

    onEpisodeClick(episode) {
        this.props.onEpisodeClick(this.props.season, episode);
    }

    render() {

        const episodes = this.props.data.map((watched, episode) => {
            return <Episode key={this.props.season + episode} watched={watched} episode={episode} onEpisodeClick={this.onEpisodeClick} />
        });

        return (
            <div>
                <h3>Season {this.props.season}:</h3>
                <div className='season'>
                    {episodes}
                </div>
            </div>
        );
    }
}

export default Season;
