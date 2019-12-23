import React, { useState } from 'react';
import { Form, Icon, Input, Button, Row, Typography, Modal } from 'antd';
import { Redirect } from 'react-router';
import $ from 'jquery';
import Swal from 'sweetalert2';

import '../_css/form.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import FacebookLogin from '../facebook';
import GoogleLogin from '../google';

import './index.css';
import { RequestVerify } from './actions';

const LoginForm = props => {
  // eslint-disable-next-line react/prop-types
  const { login, loginDone } = props;
  const [isLoading, setLoading] = useState(false);
  const [isLoginedIn, setLoginedIn] = useState([false, '']);
  const { setAuthTokens } = useAuth();

  const done = (err, token, user) => {
    setLoading(false);
    if (!err) {
      setAuthTokens({ token, user });
      setLoginedIn([true, user.role]);
      loginDone({ user, token });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const formVal = $('.customLoginForm').serializeArray();
    login(formVal[0].value, formVal[1].value, done);
  };

  const { Title } = Typography;
  const [verify, setVerify] = useState(false);
  const [email, setEmail] = useState(false);
  if (isLoginedIn[0]) return <Redirect to={isLoginedIn[1]} />;
  //-----------------------------------------------

  const handleOk = e => {
    console.log(e);
    setLoading(true);
    setVerify(false);
    RequestVerify(email)
      .then(res => Swal.fire('Thông báo', res.status))
      .finally(() => setLoading(false));
  };

  const handleCancel = e => {
    setVerify(false);
    console.log(e);
  };
  const popup = (
    <Modal
      title="Basic Modal"
      visible={verify}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="GỬI EMAIL"
    >
      <Input
        onChange={e => {
          console.log(e);
          setEmail(e.target.value);
        }}
        className="myInput"
        placeholder="email"
      />
    </Modal>
  );
  //-----------------------------------------------
  return (
    <div className="loginPage">
      <Row type="flex" justify="center" align="middle" className="loginRow">
        <Form onSubmit={handleSubmit} className="login-form customLoginForm">
          <Title level={4}>ĐĂNG NHẬP</Title>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ display: 'inline', fontWeight: 'bold' }}>Chưa có tài khoản ?</p>
            <Link style={{ display: 'inline', fontWeight: 'bold' }} to="/register">
              Đăng ký ngay !
            </Link>
          </div>
          <Form.Item>
            <Input
              name="email"
              type="email"
              required
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item>
            <Input
              name="password"
              required
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Mật khẩu"
            />
            <a className="login-form-forgot" href="/" style={{ fontWeight: 'bold' }}>
              Quên mật khẩu ?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ fontWeight: 'bold' }}
              loading={isLoading}
            >
              Đăng nhập
            </Button>
            <h5>hoặc đăng nhập bằng</h5>
            <div className="socialBtnLogin">
              <GoogleLogin loading={setLoading} />
              <FacebookLogin loading={setLoading} />
            </div>
            <Button onClick={() => setVerify(true)}>Xác thực tài khoản</Button>
          </Form.Item>
        </Form>
        {popup}
      </Row>
    </div>
  );
};

export default LoginForm;
