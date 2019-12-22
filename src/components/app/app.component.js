import React, { useState } from 'react';
import { Layout, notification } from 'antd';
import socketIOClient from 'socket.io-client';
import { Switch, Route, Redirect } from 'react-router';
import Footer from '../layout/footer';
import Header from '../layout/header';
import Login from '../login';
import UserRegister from '../register';
import StudentHome from '../studentHome';
import TutorHome from '../tutorHome';
import TutorDetail from '../tutorDetail';
import Home from '../home';
import TutorList from '../tutorlist';
import './app.css';
import Updateform from '../user/update';
import { AuthContext } from '../../context/auth';
import { TutorRoute, StudentRoute } from '../auth/Routes';
import { BubbleChat } from '../tutor/chatbox';
import { Messenger } from '../tutor/messenger';
import { BackendUrl } from '../../service/URL';

const { Content } = Layout;
const App = () => {
  let tokenStorage = {};
  const socket = socketIOClient(BackendUrl);
  socket.on('notify', () => {
    notification.info({
      message: 'TIN NHẮN MỚI',
      description: 'Có một tin nhăn mới nè',
    });
  });
  try {
    tokenStorage = JSON.parse(localStorage.getItem('tokens')) || {};
  } catch (e) {
    tokenStorage = {};
  }
  tokenStorage.socket = socket;
  const [authTokens, setAuthTokens] = useState(tokenStorage);
  const setTokens = data => {
    console.log('setAuth');
    if (data) {
      setAuthTokens({ ...authTokens, ...data });
    } else {
      setAuthTokens({ socket: authTokens.socket });
    }
    localStorage.setItem('tokens', JSON.stringify(data));
  };
  if (authTokens.user) {
    authTokens.socket.emit('hello', authTokens.user.id);
  }
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
            <StudentRoute
              exact
              path={`${process.env.PUBLIC_URL}/student`}
              component={StudentHome}
            />
            <TutorRoute exact path={`${process.env.PUBLIC_URL}/tutor`} component={TutorHome} />
            <TutorRoute exact path={`${process.env.PUBLIC_URL}/me`} component={Updateform} />
            <Route exact path={`${process.env.PUBLIC_URL}/chat`} component={BubbleChat} />
            <TutorRoute exact path={`${process.env.PUBLIC_URL}/mess`} component={Messenger} />
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
