import React, { useState } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router';
import Footer from './components/layout/footer';
import Header from './containers/header';

import { AuthContext } from './context/auth';
import Login from './components/login';
import UserRegister from './components/register';
import './App.css';
import PrivateRoute from './auth/PrivateRoute';
import StudentHome from './components/StudentHome';

const { Content } = Layout;
const App = () => {
  const [authTokens, setAuthTokens] = useState(true);

  const setTokens = data => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Header />
      <div className="App">
        <Content>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Login />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/login`}>
              <Login />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/register`}>
              <UserRegister />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/tutorregister`}>
              <TuTorRegister />
            </Route>
            <PrivateRoute
              exact
              path={`${process.env.PUBLIC_URL}/private`}
              component={StudentHome}
            />
          </Switch>
        </Content>
      </div>
      <Footer />
    </AuthContext.Provider>
  );
};

export default App;
