import React, { Component } from 'react';

import './Music.css';

export default class Music extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
  }

  render() {
    const { user, repos } = this.state;
    return (
      <div className="container">
        <div className="text-center page-header">
          <h2>Music</h2>
          <p>
            Music has been a major part of my life for over 14 years of my life. 
            Right now I work full time as a software engineer for a music distribution company (TuneCore).
            When I'm not working, I can usually be found recording/editing music of my own, attending live shows in NYC,
            or just simply listening to vinyl records in my cozy apartment.
          </p>

          <br/>

          <p>For those that are interested, you can find some of my music and music related things below.</p>
        </div>

        <div className="container">
          <h1>something music related here</h1>
        </div>
      </div>
    );
  }
}