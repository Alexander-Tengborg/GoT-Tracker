import React from 'react';
import logo from './logo.svg';
import './Season.css';

import Episode from './Episode';

class Season extends React.Component {
    render() {

        const episodes = this.props.data.map((data) => {
            return <Episode data={data} />
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
