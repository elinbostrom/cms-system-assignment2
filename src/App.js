import React from 'react';
import { Route, Switch } from 'react-router-dom';

// * Pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import StartPage from './pages/StartPage';
import AdminPage from './pages/AdminPage';
import CreateClientPage from './pages/CreateClientPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/create-client">
          <CreateClientPage />
        </Route>

        <Route path="/home">
          <AdminPage />
        </Route>

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
