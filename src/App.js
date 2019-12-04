import React, { useState } from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router';
import Footer from './components/layout/footer';
import Header from './containers/header';

import { AuthContext } from './context/auth';
import Login from './containers/login';
import UserRegister from './containers/register';
import './App.css';
import PrivateRoute from './auth/PrivateRoute';
import StudentHome from './components/StudentHome';

const { Content } = Layout;
const App = props => {
  const { userData } = props;
  let isLogin = false;
  if (userData === '') {
    isLogin = false;
  } else {
    isLogin = true;
  }
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
              {isLogin ? <Redirect to="/private" /> : <Login />}
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/login`}>
              {isLogin ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/register`}>
              {isLogin ? <Redirect to="/" /> : <UserRegister />}
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
