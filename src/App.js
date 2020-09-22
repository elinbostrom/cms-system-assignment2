import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <h1>HEJ</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
