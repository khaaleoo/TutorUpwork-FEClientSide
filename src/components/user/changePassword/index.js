/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Form, Icon, Input, Button, Row, Col, Modal } from 'antd';
import { changePassword } from './actions';
import { useAuth } from '../../../context/auth';
import './index.css';

const ChangePass = props => {
  const { form } = props;
  const { getFieldDecorator } = form;
  const { authTokens } = useAuth();
  const { token, user } = authTokens;
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        setLoading(true);
        changePassword(values.password, token)
          .then(res => {
            if (res.status === 'OK')
              Modal.success({
                title: 'Thành công',
                content: 'Thay đổi mật khẩu thành công',
              });
            else
              Modal.error({
                title: 'Có lỗi',
                content: res.message,
              });
          })
          .finally(() => setLoading(false));
      }
    });
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (form.getFieldValue('repassword') !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const MyForm = (
    <Form onSubmit={handleSubmit} className="login-form" ti>
      <h1>Thay đổi mật khẩu</h1>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
          defaultValue={user.email}
          readOnly
        />
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: 'Please input your Password!' },
            { validator: compareToFirstPassword },
          ],
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Mật khẩu"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('repassword', {
          rules: [
            { required: true, message: 'Please input your Password!' },
            { validator: compareToFirstPassword },
          ],
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Lặp lại mật khẩu"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
          Thay đổi
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Row className="full">
      <Col span={10} offset={7}>
        {MyForm}
      </Col>
    </Row>
  );
};

export const ChangePassword = Form.create()(ChangePass);
