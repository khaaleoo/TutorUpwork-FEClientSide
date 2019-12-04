import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { authFace } from '../../actions/account';

const LoginFacebook = () => {
  const responseFacebook = response => {
    console.log(response);
  };
  return (
    <FacebookLogin
      appId="534933360418734"
      fields="name,email,picture,birthday,gender"
      size="small"
      callback={responseFacebook}
    />
  );
};
const mapDispatchToProps = dispatch => ({
  authFace: profile => dispatch(authFace(profile)),
});
export default connect(null, mapDispatchToProps)(LoginFacebook);
