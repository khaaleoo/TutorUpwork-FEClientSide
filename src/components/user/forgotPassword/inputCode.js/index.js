/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { RecoverPassCode } from './actions';

const InputCode = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { next, email } = props;
  const handleSubmit = e => {
    e.preventDefault();
    setError({});
    props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        setLoading(true);
        try {
          const r = await RecoverPassCode(values.code, email);
          setLoading(false);
          if (r.status === 'OK') {
            next();
          } else {
            setError({ validateStatus: 'error', help: 'Code sai' });
          }
        } catch (er) {
          console.log(er);
        }
      }
    });
  };
  const { form } = props;
  const { getFieldDecorator } = form;
  console.log('err', error);
  return (
    <Form
      wrapperCol={{ span: 18 }}
      labelCol={{ span: 6 }}
      onSubmit={handleSubmit}
      style={{ paddingTop: 60 }}
    >
      <h2>Chúng tôi đã gửi email cho bạn. Hãy nhập code nhận được vào đây</h2>
      <Form.Item label="Code nhận được" {...error} style={{ display: 'inline-block', width: 500 }}>
        {getFieldDecorator('code', {
          rules: [{ required: true, message: 'Please input your code!' }],
        })(<Input />)}
      </Form.Item>
      <Form.Item style={{ display: 'inline-block', marginLeft: 10 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

// eslint-disable-next-line import/prefer-default-export
export const Code = Form.create()(InputCode);
