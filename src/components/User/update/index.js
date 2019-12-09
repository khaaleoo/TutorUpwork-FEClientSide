/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { LocationInput } from './location.input';
import { listCitys, listDistricts } from './location';
import './index.css';
import SkillsInput from './skills.input';
import { NumberInput } from './number.input';
import { AvatarUploader } from '../AvatarUploader';

const UpdateForm = props => {
  const [idTinh, setIdTinh] = useState(0);
  const { form } = props;
  const { getFieldDecorator } = form;
  const [errors, setError] = useState({});
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        return;
      }
      const myError = {};
      Object.keys(err).forEach(val => {
        myError[val] = {
          validateStatus: 'error',
          help: err[val].errors[0].message,
        };
      });
      setError(myError);
    });
  };

  const formStyle = { border: '2px solid white' };
  const formProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    style: formStyle,
    onSubmit: handleSubmit,
    className: 'myForm login-form ',
  };

  const submitInput = (
    <Button
      type="primary"
      htmlType="submit"
      className="login-form-button"
      style={{ fontWeight: 'bold' }}
    >
      Đăng nhập
    </Button>
  );

  return (
    <Row>
      <Col span={10} offset={7}>
        <Form {...formProps}>
          <AvatarUploader style={{ marginBottom: '50px' }} />
          <Form.Item label="Họ Tên">
            {getFieldDecorator('hoten', {
              initialValue: '',
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Nơi ở">
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
              <LocationInput
                name="tinh"
                getFieldDecorator={getFieldDecorator}
                placeholder="Tỉnh"
                optionList={listCitys}
                onChange={setIdTinh}
              />
            </Form.Item>
            <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
              <LocationInput
                name="huyen"
                getFieldDecorator={getFieldDecorator}
                placeholder="Huyện"
                optionList={listDistricts(idTinh)}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Kỹ Năng" {...errors.skills}>
            <SkillsInput name="skills" getFieldDecorator={getFieldDecorator} />
          </Form.Item>
          <Form.Item label="Giá trên giờ" {...errors.gia}>
            <NumberInput name="gia" type="text" getFieldDecorator={getFieldDecorator} />
          </Form.Item>
          <Form.Item label="Cập nhật">{submitInput}</Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default Form.create()(UpdateForm);
