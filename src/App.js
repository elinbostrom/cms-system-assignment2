import React from 'react';
import { Route, Switch } from 'react-router-dom';

// * Components
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import StartPage from './pages/StartPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <SignUpPage />
        </Route>

        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
