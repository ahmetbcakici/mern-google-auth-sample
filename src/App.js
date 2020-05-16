import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './views/Homepage';
import Profile from './views/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/profile" component={Profile} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
