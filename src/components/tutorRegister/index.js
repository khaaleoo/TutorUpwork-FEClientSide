import React from 'react';
import { Form, Icon, Input, Button, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const RegisterForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const { Title } = Typography;
  return (
    <div className="loginPage">
      <Row type="flex" justify="center" align="middle" className="loginRow">
        <Form onSubmit={handleSubmit} className="login-form customLoginForm">
          <Title level={3}>Đăng ký</Title>
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
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Input
              required
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Input
              required
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Đăng ký
            </Button>
            <p>hoặc đăng ký bằng</p>
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

            <Link to="/register"> Đăng ký tài khoản thường</Link>
            <p>Đã có tài khoản ?</p>
            <Link to="/login"> Đăng nhập</Link>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default RegisterForm;
