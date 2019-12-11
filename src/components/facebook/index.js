import React, { useState } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router';
import { authFace } from '../../reducers/actions/account/account.api';
import { useAuth } from '../../context/auth';

const LoginFacebook = props => {
  // eslint-disable-next-line react/prop-types
  const { loginDone, authFacebook, role } = props;
  const { setAuthTokens } = useAuth();
  const [isLoginedIn, setLoginedIn] = useState([false, '']);
  const done = (err, token, user) => {
    if (!err) {
      setAuthTokens(token);
      setLoginedIn([true, user.role]);
      loginDone({ user, token });
    }
  };
  const responseFacebook = response => {
    console.log(response);
    authFacebook({ response, role }, done);
  };
  if (isLoginedIn[0]) return <Redirect to={isLoginedIn[1]} />;
  return (
    <FacebookLogin
      appId="534933360418734"
      fields="name,email,picture,birthday,gender"
      size="small"
      textButton=""
      callback={responseFacebook}
      cssClass="fbBtn"
      icon="fa-facebook"
    />
  );
};
const mapDispatchToProps = dispatch => ({
  authFacebook: (profile, done) => dispatch(authFace(profile, done)),
  loginDone: user => dispatch({ type: 'SAVE_USER_DATA', userData: user }),
});
export default connect(null, mapDispatchToProps)(LoginFacebook);
