import React from 'react';
import logo from './logo.svg';
import './Episode.css';

class Episode extends React.Component {
    render() {
        return (
            <div className='episode'>
                {this.props.data}
            </div>
        );
    }
}

export default Episode;
