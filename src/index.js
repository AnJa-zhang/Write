import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hasHistort } from 'react-router';
import Home from './views/home';
import Explore from './views/explore';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home}/>
        <Route path="/explore" component={Explore}/>
      </Router>
    )
  }
}

ReactDOM.render(
<App />
, document.getElementById('root'));