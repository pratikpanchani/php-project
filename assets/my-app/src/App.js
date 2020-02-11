import './App.css';
import React, { Component } from 'react';
import uploadPlayers from './components/uploadPlayers';
import allPlayers from './components/allPlayers';
import singlePlayer from './components/singlePlayer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  render() {
    return(
    <Router >
    <Switch>
    <Route exact path='/' component={uploadPlayers} />
    <Route exact path='/upload' component={uploadPlayers} />
			<Route path='/players' component={allPlayers} />
			<Route path='/player/:id' component={singlePlayer} />
      <Route path="*" component={PageNotFound} />
    </Switch>
	</Router>
    )
  }
}

export default App;
