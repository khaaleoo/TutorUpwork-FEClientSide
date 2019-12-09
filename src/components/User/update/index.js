/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Radio, InputNumber } from 'antd';
import { LocationInput } from './location.input';
import { listCitys, listDistricts } from './location';
import './index.css';
import SkillsInput from './skills.input';
import { AvatarUploader } from '../AvatarUploader';
import { Editor } from './editor';

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
      } else {
        const myError = {};
        if (err) {
          Object.keys(err).forEach(val => {
            myError[val] = {
              validateStatus: 'error',
              help: err[val].errors[0].message,
            };
          });
        }
        setError(myError);
      }
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
  const checkPrice = (rule, value, callback) => {
    const result = Number.parseInt(value, 10);
    if (Number.isNaN(result)) return callback('Vui lòng nhập một số');
    if (value <= 0) return callback('Vui lòng nhập số dương');
    return callback();
  };
  return (
    <Row>
      <Col span={10} offset={7}>
        <Form {...formProps}>
          <AvatarUploader size={150} style={{ marginBottom: '50px' }} />
          <hr />
          <Form.Item label="Email">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Họ Tên">
            {getFieldDecorator('name', {
              initialValue: '',
              rules: [{ required: true, message: 'Bạn là người vô danh à?:)' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Kỹ Năng" {...errors.skills}>
            {getFieldDecorator('skills', {
              rules: [{ required: true, message: 'Vui lòng chọn ít nhất một kỹ năng' }],
            })(<SkillsInput />)}
          </Form.Item>
          <Form.Item label="Giá trên giờ" {...errors.gia}>
            {getFieldDecorator('price', {
              initialValue: 0,
              rules: [{ validator: checkPrice }],
            })(<Input />)}
          </Form.Item>
          <hr />
          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            label="Giới tính"
            style={{
              width: '50%',
              display: 'inline-block',
            }}
          >
            {getFieldDecorator('gender', {
              initialValue: 'Nam',
            })(
              <Radio.Group buttonStyle="solid">
                <Radio.Button value="Nam">Nam</Radio.Button>
                <Radio.Button value="Nữ">Nữ</Radio.Button>
              </Radio.Group>,
            )}
          </Form.Item>
          <Form.Item
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            label="Tuổi"
            style={{
              width: '50%',
              display: 'inline-block',
            }}
          >
            {getFieldDecorator('age', {
              initialValue: 0,
              rules: [{ validator: checkPrice }],
            })(<InputNumber />)}
          </Form.Item>
          <Form.Item
            style={{
              display: 'inline-block',
              margin: '0px 10px',
            }}
          >
            {getFieldDecorator('province', {
              initialValue: 0,
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<LocationInput optionList={listCitys} onChange={setIdTinh} />)}
          </Form.Item>
          <Form.Item
            style={{
              display: 'inline-block',
              margin: '0px 10px',
            }}
          >
            {getFieldDecorator('district', {
              initialValue: 0,
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<LocationInput optionList={listDistricts(idTinh)} />)}
          </Form.Item>
          <hr />

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ fontWeight: 'bold', marginTop: '20px' }}
            >
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={14} offset={5}>
        <Editor />
      </Col>
    </Row>
  );
};
export default Form.create({ name: 'normal_login' })(UpdateForm);
