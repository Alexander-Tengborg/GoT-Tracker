import React from 'react';
import './Episode.css';

const watchedColor = '#527B4D';
const notWatchedColor = '#712D39';

class Episode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: notWatchedColor
        }

        this.onEpisodeClick = this.onEpisodeClick.bind(this);
    }

    onEpisodeClick() {
        this.props.onEpisodeClick(this.props.episode);
    }

    render() {

        let color = this.props.watched === true ? watchedColor : notWatchedColor;

        return (
            <div className='episode' style={{backgroundColor: color}} onClick={this.onEpisodeClick}>
                <h1>{this.props.episode + 1}</h1>
            </div>
        );
    }
}

export default Episode;
