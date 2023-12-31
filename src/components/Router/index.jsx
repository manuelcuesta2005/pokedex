import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Home" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;