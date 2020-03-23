import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={["/", "/home",]} exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
