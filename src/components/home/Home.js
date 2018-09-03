import React, { Component } from 'react';

import { getUserByName, getReposFromUser } from '../../utils/github';
import './Home.css';

// components
import Badge from '../badge/badge';
import Card from '../card/card';

export default class Home extends Component {
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

  renderHeader() {
    const { username } = this.state;
    return (
      <div className='App container'>
        <div>
          <div className='page-header'>
            <h2>Esa Julian Serog</h2>
            <h6>Developer, Musician, Amateur Photographer</h6>
          </div>
        </div>
      </div>
    );
  }

  renderBody() {
    return (
      <div>
        <div className='row'>
          <div class='col-md-12'>
            <img src='../../assets/esa.jpg' class='img-responsive' alt='Cinque Terre'/>
            <p>paragraph about who I am here</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { user, repos } = this.state;
    return (
      <div className='container'>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }
}


