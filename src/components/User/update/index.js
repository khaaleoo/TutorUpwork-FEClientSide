/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
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
  const [editorError, setEditorError] = useState(true);
  const [html, setHtml] = useState('');
  const [errors, setError] = useState({});
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err && !editorError) {
        console.log('Received values of form: ', values);
        console.log('editor', html);
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
        if (editorError) {
          myError.editor = {
            validateStatus: 'error',
            help: 'Cập nhật',
          };
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

  const submitInput = (
    <Button
      type="primary"
      htmlType="submit"
      className="login-form-button"
      style={{ fontWeight: 'bold', marginTop: '20px' }}
    >
      Đăng nhập
    </Button>
  );

  const handleEditorChange = (error, content) => {
    setEditorError(error);
    setHtml(content);
  };
  const checkPrice = (rule, value, callback) => {
    const result = Number.parseInt(value, 10);
    if (Number.isNaN(result)) {
      callback('Vui lòng nhập một số');
      return;
    }
    if (value <= 0) {
      callback('Lương thì phải lớn hơn 0 chứ bạn!!!');
      return;
    }
    callback();
  };
  return (
    <Row>
      <Col span={14} offset={5}>
        <Form {...formProps}>
          <AvatarUploader size={150} style={{ marginBottom: '50px' }} />
          <hr />
          <Form.Item label="Họ Tên">
            {getFieldDecorator('hoten', {
              initialValue: '',
              rules: [{ required: true, message: 'Bạn là người vô danh à?:)' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Kỹ Năng" {...errors.skills}>
            <SkillsInput name="skills" getFieldDecorator={getFieldDecorator} />
          </Form.Item>
          <Form.Item label="Giá trên giờ" {...errors.gia}>
            {getFieldDecorator('gia', {
              initialValue: 0,
              rules: [{ validator: checkPrice }],
            })(<Input />)}
          </Form.Item>
          <hr />
          <Form.Item label="Nơi ở">
            <Form.Item style={{ display: 'inline-block', width: '50%' }}>
              <LocationInput
                name="tinh"
                getFieldDecorator={getFieldDecorator}
                placeholder="Tỉnh"
                optionList={listCitys}
                onChange={setIdTinh}
              />
            </Form.Item>

            <Form.Item style={{ display: 'inline-block', width: '50%' }}>
              <LocationInput
                name="huyen"
                getFieldDecorator={getFieldDecorator}
                placeholder="Huyện"
                optionList={listDistricts(idTinh)}
              />
            </Form.Item>
          </Form.Item>
          <hr />
          <Form.Item wrapperCol={{ span: 24 }} {...errors.editor}>
            <Editor onChange={handleEditorChange} />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>{submitInput}</Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default Form.create({ name: 'normal_login' })(UpdateForm);
