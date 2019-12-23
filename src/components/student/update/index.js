/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, Radio, DatePicker } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import './index.css';
import { AvatarUploader } from '../../user/avatarUploader/index';
import { useAuth } from '../../../context/auth';
import { getMe, updateRequest } from './actions';
import { LocationInput } from './location.input';
import { listCitys, listDistricts } from './location';

const StudentUpdateForm = props => {
  const { form } = props;
  const { getFieldDecorator } = form;
  const [idTinh, setIdTinh] = useState(0);
  const { authTokens } = useAuth();
  const [data, setData] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getMe(authTokens.token).then(res => {
      console.log('data', res);
      if (res) {
        setData(res);
        setIdTinh(res.address.city);
      }
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
        setLoading(true);
        updateRequest(authTokens.token, body).finally(() => setLoading(false));
      }
    });
  };

  const formStyle = {
    border: '2px solid white',
    boxShadow: '10px 10px 38px 0px rgba(0, 0, 0, 0.75)',
  };
  const formProps = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    style: formStyle,
    onSubmit: handleSubmit,
    className: 'myForm login-form ',
  };

  return (
    <Row className="updateStudent">
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
              initialValue: data ? data.gender : 'Nam',
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
            label="Ngày sinh:"
            style={{
              width: '50%',
              display: 'inline-block',
            }}
          >
            {getFieldDecorator('birthday', {
              initialValue: data ? moment(data.birthday) : moment(new Date()),
            })(<DatePicker format="DD-MM-YYYY" />)}
          </Form.Item>

          <hr />
          {data ? (
            <Form.Item
              style={{
                display: 'inline-block',
                margin: '0px 10px',
              }}
            >
              {getFieldDecorator('province', {
                initialValue: data ? data.address.city : 0,
              })(
                <LocationInput
                  optionList={listCitys}
                  onChange={setIdTinh}
                  init={data ? data.address.city : 0}
                />,
              )}
            </Form.Item>
          ) : (
            <LocationInput optionList={listCitys} onChange={setIdTinh} />
          )}

          {!data ? (
            <LocationInput optionList={listDistricts(idTinh)} />
          ) : (
            <Form.Item
              style={{
                display: 'inline-block',
                margin: '0px 10px',
              }}
            >
              {getFieldDecorator('district', {
                initialValue: data.address.district,
              })(<LocationInput optionList={listDistricts(idTinh)} init={data.address.district} />)}
            </Form.Item>
          )}

          <hr />
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ fontWeight: 'bold' }}
              loading={isLoading || !data}
            >
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

const MyForm = Form.create({ name: 'normal_login' })(StudentUpdateForm);

const mapStateToProps = state => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = () => {
  return {};
};
export const UpdateStudent = connect(mapStateToProps, mapDispatchToProps)(MyForm);
