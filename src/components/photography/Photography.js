import React, { Component } from 'react';

import './Photography.css';

// components
import Badge from '../badge/badge';
import Card from '../card/card';

export default class Photography extends Component {
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


  renderAlbums() {
    let cards = [];
    for(let i =0; i < 10; i++) {
      cards.push(<Card/>);
    }

    return cards;
  }

  render() {
    const { user, repos } = this.state;
    return (
      <div className="container">
        <div className="text-center page-header">
          <h2>Photography by Esa Serog</h2>
          <h6>Albums</h6>
        </div>

        <div className="container">
          {this.renderAlbums()}
        </div>
      </div>
    );
  }
}


