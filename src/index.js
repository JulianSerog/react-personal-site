import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './index.css';

import Home from './components/home/Home';
import Photography from './components/photography/Photography';
import registerServiceWorker from './registerServiceWorker';
import Music from './components/music/Music';

function renderActive(linkName) {
  console.log(BrowserRouter);
  return linkName === '' ? '' : '';
}

ReactDOM.render(
	<div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Esa Serog</a>
        </div>
        <ul className="nav navbar-nav">
          <li className={renderActive('/')}><a href="/">Home</a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/photography">Photography</a></li>
          <li><a href="#">Resume</a></li>
        </ul>
      </div>
    </nav>
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact={true} />
        <Route path="/music" component={Music} />
				<Route path="/photography" component={Photography} />
			</Switch>
		</ BrowserRouter>
	</div>
	, document.getElementById('root'));
registerServiceWorker();
