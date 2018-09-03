import React, { Component } from 'react';

import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let albumTitle = "Album Title";
    let albumDescription = "Album Description";
    return (
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
        <div className="card bs-card">
          <img className="card-img-top" src="https://picsum.photos/200/300/?random" alt="Card image cap" />
          <div className="card-body text-center center">
            <h4 className="card-title"><b>{albumTitle}</b></h4>
            <p className="card-text">{albumDescription}</p>
            <a href="#" className="btn btn-primary">View Album</a>
          </div>
        </div>
      </div>
    );
  }
}