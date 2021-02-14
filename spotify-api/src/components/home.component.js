import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        axios.get('http://localhost:5000/authorize/login')
        // Incomplete :(
    }

    render() {
        return (
            <div>
                <p>Welcome to the Spotify Playlist Printer.</p>
                <button onClick={() => this.handleClick()}>
                    Log In
                </button>

            </div>
        )
    }
}