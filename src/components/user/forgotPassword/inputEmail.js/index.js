import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { RecoverPassRequest } from './actions';

const InputEmail = props => {
  const [loading, setLoading] = useState(false);
  const { next, setEmail } = props;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        setLoading(true);
        const r = await RecoverPassRequest(values.email);
        setLoading(false);
        if (r.status === 'OK') {
          setEmail(values.email);
          next();
        }
      }
    });
  };
  const { form } = props;
  const { getFieldDecorator } = form;
  return (
    <Form
      style={{ paddingTop: 10 }}
      className="myLogin"
      wrapperCol={{ span: 18 }}
      labelCol={{ span: 6 }}
      onSubmit={handleSubmit}
    >
      <h1>HÃY NHẬP EMAIL CỦA BẠN</h1>
      <Form.Item label="Email của bạn" style={{ display: 'inline-block', width: 500 }}>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your email!' }],
        })(<Input type="email" />)}
      </Form.Item>
      <Form.Item style={{ display: 'inline-block', marginLeft: 15 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

// eslint-disable-next-line import/prefer-default-export
export const Email = Form.create()(InputEmail);
