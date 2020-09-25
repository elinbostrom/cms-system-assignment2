import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// * Pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';
import CreateCustomerPage from './pages/CreateCustomerPage';
import LayoutSimple from './components/LayoutSimple';
import { UserContext } from './context/UserContext';
import { CustomerContext } from './context/CustomerContext';
import CustomerDetailPage from './pages/CustomerDetailPage';

function App() {
  const [activeUser, setActiveUser] = useState("Hej")
  const [customerInfo, setCustomerInfo] = useState({})
  const [customerList, setCustomerList] = useState([])
  const [customerDetails, setCustomerDetails] = useState({})

  // setActiveUser('Hejdå')

  return (
    <div>
      <CustomerContext.Provider
        value={{
          customerInfo,
          setCustomerInfo,
          customerList,
          setCustomerList,
          customerDetails,
          setCustomerDetails
        }}>

        <UserContext.Provider
          value={{
            activeUser,
            setActiveUser
          }}>

          <LayoutSimple>

            <Switch>
              <Route path="/customers/:id" render={props => (
                <CustomerDetailPage {...props} />
              )}>

              </Route>

              <Route path="/create-customer">
                <CreateCustomerPage />
              </Route>

              <Route path="/home">
                <HomePage />
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
          </LayoutSimple>
        </UserContext.Provider>
      </CustomerContext.Provider>
    </div >
  );
}

export default App;
