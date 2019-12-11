import React, { useState } from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router';
import Footer from '../layout/footer';
import Header from '../layout/header';
import Login from '../login';
import UserRegister from '../register';
import StudentHome from '../studentHome';
import TutorHome from '../tutorHome';
import TutorDetail from '../tutorDetail';
import Home from '../home';
import TutorList from '../tutorList';
import './app.css';
import Updateform from '../user/update';
import { AuthContext } from '../../context/auth';
import PrivateRoute from '../auth/PrivateRoute';

const { Content } = Layout;
const App = () => {
  let tokenStorage = false;
  try {
    tokenStorage = JSON.parse(localStorage.getItem('tokens')) || false;
  } catch (e) {
    tokenStorage = false;
  }
  const [authTokens, setAuthTokens] = useState(tokenStorage);
  const setTokens = data => {
    console.log('setAuth');
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Header auth={authTokens} />
      <div className="App">
        <Content>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route exact path={`${process.env.PUBLIC_URL}/tutorlist`} component={TutorList} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route exact path={`${process.env.PUBLIC_URL}/register`} component={UserRegister} />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/tutordetail/:id`}
              component={TutorDetail}
            />
            <PrivateRoute
              exact
              path={`${process.env.PUBLIC_URL}/student`}
              component={StudentHome}
            />
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/tutor`} component={TutorHome} />
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/me`} component={Updateform} />

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
