import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hasHistort } from 'react-router';
import Home from './views/home';

class App extends React.Component {
  render() {
    return (
      <Router>
      <Route path="/" component={Home}/>
    </Router>
    )
  }
}

ReactDOM.render(
<App />
, document.getElementById('root'));