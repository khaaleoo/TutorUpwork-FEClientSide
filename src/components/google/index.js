import React, { useState } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router';
import { authGg } from '../../reducers/actions/account/account.api';
import { useAuth } from '../../context/auth';

const LoginGoogle = props => {
  const { setAuthTokens } = useAuth();
  const [isLoginedIn, setLoginedIn] = useState([false, '']);
  // eslint-disable-next-line react/prop-types
  const { loginDone } = props;

  const done = (err, token, user) => {
    if (!err) {
      setAuthTokens(token);
      setLoginedIn([true, user.role]);
      loginDone({ user, token });
    }
  };
  const responseGoogle = response => {
    props.authGg({ profile: response.profileObj, role: props.role }, done);
  };
  if (isLoginedIn[0]) return <Redirect to={isLoginedIn[1]} />;
  return (
    <GoogleLogin
      className="googleBtn"
      clientId="19331003292-lk4pgjadg5darum3m808gql7bau202t8.apps.googleusercontent.com"
      buttonText=""
      size="small"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );
};
const mapDispatchToProps = dispatch => ({
  authGg: (profile, done) => dispatch(authGg(profile, done)),
  loginDone: user => dispatch({ type: 'SAVE_USER_DATA', userData: user }),
});
export default connect(null, mapDispatchToProps)(LoginGoogle);
