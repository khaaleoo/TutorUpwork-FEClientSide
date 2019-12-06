import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../layout/footer';
import Header from '../layout/header';
import { AuthContext } from '../../context/auth';
import Login from '../login';
import UserRegister from '../register';
import PrivateRoute from '../auth/PrivateRoute';
import StudentHome from '../StudentHome';
import TutorHome from '../TutorHome';

import './app.css';
import { AvatarUploader } from '../User/AvatarUploader';

const { Content } = Layout;
const App = () => {
  const [authTokens, setAuthTokens] = useState(false);

  const setTokens = data => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  const Home = () => (
    <Button style={{ margin: '50px 50px' }}>
      <Link to="/login">ĐĂNG NHẬP</Link>
    </Button>
  );
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
            <Route path={`${process.env.PUBLIC_URL}/test`}>
              <AvatarUploader getURL={url => console.log(url)} />
            </Route>
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
