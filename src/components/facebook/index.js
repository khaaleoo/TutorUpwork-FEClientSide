import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useAuth } from '../../context/auth';
import { MyModal } from './modal';
import { verifyFace, loginFace } from './actions';

const LoginFacebook = props => {
  const { setAuthTokens } = useAuth();
  const [confirmRole, setCofirm] = useState(false);
  const [body, setBody] = useState({});
  const { loading } = props;

  const done = async (err, token, user) => {
    if (!err) {
      setAuthTokens({ token, user });
    }
  };

  const responseFacebook = async response => {
    console.log('..........', response);
    loading(true);
    const res = await verifyFace(response.id);
    console.log(res);
    if (res.user) {
      done(null, res.token, res.user);
    } else {
      const avatar = response.picture ? response.picture.data.url : '';
      setBody({
        id: response.id,
        email: response.email,
        type: 2,
        name: response.name,
        avatar,
      });
      setCofirm(true);
    }
    // }
  };
  const result = async res => {
    const r = res === 'OK' ? 'tutor' : 'student';
    const re = await loginFace({ ...body, role: r });
    if (re.status === 'OK') {
      done(null, re.token, re.user);
    } else {
      done(re.message);
    }
  };
  return (
    <div>
      <FacebookLogin
        appId="534933360418734"
        fields="name,email,picture,birthday,gender"
        size="small"
        textButton=""
        callback={responseFacebook}
        cssClass="fbBtn"
        icon="fa-facebook"
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
export default LoginFacebook;
