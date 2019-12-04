import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { authGg } from '../../actions/account';

const LoginGoogle = () => {
  const responseGoogle = response => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId="19331003292-lk4pgjadg5darum3m808gql7bau202t8.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );
};
const mapDispatchToProps = dispatch => ({
  authFace: profile => dispatch(authGg(profile)),
});
export default connect(null, mapDispatchToProps)(LoginGoogle);
