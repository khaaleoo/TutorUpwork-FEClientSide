import React, { useState } from 'react';
import { Form, Icon, Input, Button, Row, Typography, Modal } from 'antd';
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
  const { login } = props;
  const [isLoading, setLoading] = useState(false);
  const { setAuthTokens } = useAuth();
  const [verify, setVerify] = useState(false);
  const [email, setEmail] = useState(false);
  const done = (err, token, user) => {
    setLoading(false);
    console.log(user);
    if (!err) {
      setAuthTokens({ token, user });
    } else if (err.code === 1) {
      setVerify(true);
      const formVal = $('.customLoginForm').serializeArray();
      setEmail(formVal[0].value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const formVal = $('.customLoginForm').serializeArray();
    login(formVal[0].value, formVal[1].value, done);
  };

  const { Title } = Typography;

  //-----------------------------------------------

  const handleOk = e => {
    console.log(e);
    setLoading(true);
    RequestVerify(email)
      .then(res => {
        setVerify(false);
        Swal.fire('Thông báo', res.status);
      })
      .finally(() => setLoading(false));
  };

  const handleCancel = e => {
    setVerify(false);
    console.log(e);
  };
  const popup = (
    <Modal
      title="Tài khoản cần xác thực"
      visible={verify}
      onOk={handleOk}
      okButtonProps={{ loading: isLoading }}
      loading={isLoading}
      onCancel={handleCancel}
      okText="GỬI EMAIL"
      cancelText="ĐÓNG"
    >
      <h2>Gửi mail xác thực</h2>
      <Input
        onChange={e => {
          console.log(e);
          setEmail(e.target.value);
        }}
        className="myInput"
        placeholder="email"
        value={email}
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
            <a className="login-form-forgot" href="/forgotPassword" style={{ fontWeight: 'bold' }}>
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
          </Form.Item>
        </Form>
        {popup}
      </Row>
    </div>
  );
};

export default LoginForm;
