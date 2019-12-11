/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import $ from 'jquery';
import { Form, Icon, Input, Button, Row, Typography, Radio } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import LoginFace from '../facebook';
import LoginGG from '../google';

const RegisterForm = props => {
  // eslint-disable-next-line react/prop-types
  const { register } = props;
  const [isRegisterSucceed, setRegisterSucceed] = useState(false);
  const [isLoading, setLoading] = useState();
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [role, setRole] = useState('student');

  let validAttr = '';
  let isPasswordValid = false;

  const checkPasss = () => {
    if (rePassword === password && rePassword !== '') {
      isPasswordValid = true;
    } else {
      isPasswordValid = false;
    }
    if (isPasswordValid) {
      $('.registerBtn').attr({ disabled: false });
      validAttr = {
        validateStatus: 'success',
      };
    } else if (rePassword !== '') {
      $('.registerBtn').attr({ disabled: true });
      validAttr = {
        validateStatus: 'error',
        help: 'Hai mật khẩu không giống nhau',
      };
    }
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleRePasswordChange = e => {
    setRePassword(e.target.value);
  };
  const done = val => {
    setLoading(false);
    setRegisterSucceed(val);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const formVal = $('.customLoginForm').serializeArray();
    console.log(formVal);
    register(formVal[0].value, formVal[1].value, formVal[2].value, done);
  };

  const { Title } = Typography;
  checkPasss();
  const handleRoleChange = e => {
    setRole(e.target.value);
  };
  return (
    <div className="loginPage">
      {isRegisterSucceed ? <Redirect to="/login" /> : ''}
      <Row type="flex" justify="center" align="middle" className="loginRow">
        <Form onSubmit={handleSubmit} className="customLoginForm login-form">
          <Title level={4}>ĐĂNG KÝ</Title>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ display: 'inline', fontWeight: 'bold' }}> Đã có tài khoản ?</p>
            <Link style={{ display: 'inline', fontWeight: 'bold' }} to="/login">
              {' '}
              Đăng nhập
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
          <Form.Item hasFeedback {...validAttr}>
            <Input
              name="password"
              required
              minLength="6"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Mật khẩu"
              onChange={e => handlePasswordChange(e)}
            />
          </Form.Item>

          <Form.Item hasFeedback {...validAttr}>
            <Input
              required
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Nhập lại mật khẩu"
              onChange={e => handleRePasswordChange(e)}
            />
          </Form.Item>
          <Form.Item>
            <p style={{ lineHeight: 'normal', fontWeight: 'bold' }}>Bạn muốn trở thành </p>
            <Radio.Group name="role" defaultValue="student" onChange={handleRoleChange}>
              <Radio.Button value="student" style={{ fontWeight: 'bold', width: '100px' }}>
                Học sinh
              </Radio.Button>
              <Radio.Button value="tutor" style={{ fontWeight: 'bold', width: '100px' }}>
                Gia sư
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button registerBtn"
              style={{ fontWeight: 'bold' }}
              loading={isLoading}
            >
              Đăng ký
            </Button>

            <h5>hoặc đăng ký bằng</h5>
            <div className="socialBtnLogin">
              <LoginGG role={role} />
              <LoginFace role={role} />
            </div>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default RegisterForm;
