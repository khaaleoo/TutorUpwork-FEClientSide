import React, { useState } from 'react';
import { Form, Icon, Input, Button, Row, Typography } from 'antd';
import '../css/form.css';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const LoginForm = () => {
  const [isLoading, setLoading] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
  };

  const { Title } = Typography;
  return (
    <div className="loginPage">
      <Row type="flex" justify="center" align="middle" className="loginRow">
        <Form onSubmit={handleSubmit} className="login-form customLoginForm">
          <Title level={4}>ĐĂNG NHẬP</Title>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ display: 'inline', fontWeight: 'bold' }}>Chưa có tài khoản ?</p>
            <Link style={{ display: 'inline', fontWeight: 'bold' }} to="/register">
              {' '}
              Đăng ký ngay !
            </Link>
          </div>
          <Form.Item>
            <Input
              type="email"
              required
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item>
            <Input
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
              <GoogleLogin
                className="googleBtn"
                clientId=""
                // onSuccess={}
                // onFailure={}
                buttonText=""
              />
              <FacebookLogin
                textButton=""
                appId=""
                fields="name,email,picture"
                icon="fa-facebook"
                // callback={}
                cssClass="fbBtn"
              />
            </div>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default LoginForm;
