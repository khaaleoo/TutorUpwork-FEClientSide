/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, Radio, InputNumber } from 'antd';
import { connect } from 'react-redux';

import { LocationInput } from './location.input';
import { listCitys, listDistricts } from './location';
import './index.css';
import SkillsInput from './skills.input';
import { AvatarUploader } from '../AvatarUploader';
import { Editor } from './editor';
import { getMe, getAllSkill, updateRequest } from './actions';
import { useAuth } from '../../../context/auth';

const UpdateForm = props => {
  const [idTinh, setIdTinh] = useState(0);
  const { form } = props;
  const { getFieldDecorator } = form;
  const { authTokens } = useAuth();
  const [data, setData] = useState(false);
  const [skills, setSkills] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    console.log('mount');
    getMe(authTokens.token).then(res => {
      console.log('data', res);
      setData(res);
    });
    getAllSkill(authTokens.token).then(res => {
      console.log('data', res);
      setSkills(res.data);
    });
  }, []);
  useEffect(() => () => console.log('unmount'), []);
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const address = {
          city: values.province,
          district: values.district,
        };

        const body = { address, ...values };
        delete body.province;
        delete body.district;
        console.log(body, authTokens.user.id);
        setLoading(true);
        updateRequest(authTokens.token, body).finally(() => setLoading(false));
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
    const reg = new RegExp('^[0-9]+$');
    if (Number.isNaN(result) || !reg.test(value)) return callback('Vui lòng nhập một số');
    if (result <= 0) return callback('Vui lòng nhập số dương');
    return callback();
  };
  return (
    <Row>
      <Col span={10} offset={7}>
        <Form {...formProps}>
          <AvatarUploader
            src={data ? data.avatar : 'loading'}
            size={150}
            style={{ marginBottom: '50px' }}
            token={authTokens.token}
          />
          <Form.Item label="Email">
            <Input disabled value={data ? data.email : 'Is Loading'} />
          </Form.Item>
          <Form.Item label="Họ Tên">
            {getFieldDecorator('name', {
              initialValue: data ? data.name : 'Is Loading',
              rules: [
                {
                  required: true,
                  message: 'Bạn là người vô danh à?:)',
                },
              ],
            })(<Input />)}
          </Form.Item>
          {!data ? (
            <Form.Item label="Kỹ Năng">
              <Input value="is Loading" />
            </Form.Item>
          ) : (
            <Form.Item label="Kỹ Năng">
              {getFieldDecorator('skills', {
                initialValue: data ? data.skills : [],
                rules: [
                  {
                    required: true,
                    message: 'Vui lòng chọn ít nhất một kỹ năng',
                  },
                ],
              })(<SkillsInput optionList={skills} init={data.skills} />)}
            </Form.Item>
          )}
          <Form.Item label="Giá trên giờ">
            {getFieldDecorator('price', {
              initialValue: data ? data.price : 0,
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
              initialValue: data ? data.age : 0,
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
              rules: [
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ],
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
              rules: [
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ],
            })(<LocationInput optionList={listDistricts(idTinh)} />)}
          </Form.Item>
          <hr />

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ fontWeight: 'bold', marginTop: '20px' }}
              loading={isLoading}
            >
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={14} offset={5}>
        <Editor token={authTokens.token} init={data ? data.intro : ''} />
      </Col>
    </Row>
  );
};

const MyForm = Form.create({ name: 'normal_login' })(UpdateForm);

const mapStateToProps = state => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
