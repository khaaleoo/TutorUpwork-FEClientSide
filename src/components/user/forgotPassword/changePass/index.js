/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { changePassword } from './actions';

const ChangePass = props => {
  const { form } = props;
  const { getFieldDecorator } = form;
  const [loading, setLoading] = useState(false);
  const { next, email } = props;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        setLoading(true);
        const res = await changePassword(values.password, email);
        setLoading(false);
        if (res && res.status === 'OK') {
          next();
        }
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

  return (
    <Form onSubmit={handleSubmit} className="myLogin" wrapperCol={{ span: 10, offset: 7 }}>
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
            className="myInput"
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
            className="myInput"
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
};

export const ChangePassword = Form.create()(ChangePass);
