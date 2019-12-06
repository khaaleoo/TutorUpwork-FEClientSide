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
import TutorHome from './components/TutorHome';
import Home from './components/home';

const { Content } = Layout;
const App = () => {
  const [authTokens, setAuthTokens] = useState(false);

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
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/register`} component={UserRegister} />
            <PrivateRoute
              exact
              path={`${process.env.PUBLIC_URL}/student`}
              component={StudentHome}
            />
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/tutor`} component={TutorHome} />
            <Route path={`${process.env.PUBLIC_URL}/`}>
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Content>
      </div>
      <Footer />
    </AuthContext.Provider>
  );
};

export default App;
