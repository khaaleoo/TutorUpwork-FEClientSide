import React, { useState } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router';
import { authGg } from '../../reducers/actions/account/account.api';
import { useAuth } from '../../context/auth';
import { verifyGoogle, loginGg } from './actions';
import { MyModal } from '../facebook/modal';

const LoginGoogle = props => {
  const { setAuthTokens } = useAuth();
  const [isLoginedIn, setLoginedIn] = useState([false, '']);
  const [confirmRole, setCofirm] = useState(false);

  const done = (err, token, user) => {
    if (!err) {
      setAuthTokens({ token, user });
      setLoginedIn([true, user.role]);
    }
  };
  // eslint-disable-next-line react/prop-types
  const { loading } = props;
  const [body, setBody] = useState({});

  const responseGG = response => {
    console.log(response);
    loading(true);
    const profile = response.profileObj;
    verifyGoogle(profile.googleId).then(res => {
      if (res.user) {
        done(null, res.token, res.user);
      } else {
        setBody({
          id: profile.googleId,
          email: profile.email,
          type: 3,
          name: profile.name,
          avatar: profile.imageUrl,
        });
        setCofirm(true);
      }
    });
  };
  const result = status => {
    const r = status === 'OK' ? 'tutor' : 'student';
    loginGg({ ...body, role: r }).then(re => {
      console.log(re);
      if (re.status === 'OK') {
        done(null, re.token, re.user);
      } else {
        done(re.message);
      }
    });
  };
  if (isLoginedIn[0]) return <Redirect to={isLoginedIn[1]} />;
  return (
    <div>
      <GoogleLogin
        className="googleBtn"
        clientId="19331003292-lk4pgjadg5darum3m808gql7bau202t8.apps.googleusercontent.com"
        buttonText=""
        size="small"
        onSuccess={responseGG}
        onFailure={err => console.log(err)}
      />
      {confirmRole && (
        <MyModal
          result={result}
          okText="TUTOR"
          cancelText="STUDENT"
          content="BẠN MUỐN ĐĂNG KÝ VỚI VAI TRÒ GÌ"
        />
      )}
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  authGg: (profile, done) => dispatch(authGg(profile, done)),
  loginDone: user => dispatch({ type: 'SAVE_USER_DATA', userData: user }),
});
export default connect(null, mapDispatchToProps)(LoginGoogle);
