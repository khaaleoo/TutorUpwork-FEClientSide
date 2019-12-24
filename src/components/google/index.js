import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useAuth } from '../../context/auth';
import { verifyGoogle, loginGg } from './actions';
import { MyModal } from '../facebook/modal';

const LoginGoogle = props => {
  const { setAuthTokens } = useAuth();
  const [confirmRole, setCofirm] = useState(false);
  const { loading, setLoginedIn } = props;
  const [body, setBody] = useState({});

  const done = async (err, token, user) => {
    if (!err) {
      setLoginedIn([true, user.role]);
      setAuthTokens({ token, user });
    }
  };

  const responseGG = async response => {
    console.log(response);
    loading(true);
    const profile = response.profileObj;
    const res = await verifyGoogle(profile.googleId);
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
  };
  const result = async status => {
    const r = status === 'OK' ? 'tutor' : 'student';
    const re = await loginGg({ ...body, role: r });
    if (re.status === 'OK') {
      done(null, re.token, re.user);
    } else {
      done(re.message);
    }
  };
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
export default LoginGoogle;
