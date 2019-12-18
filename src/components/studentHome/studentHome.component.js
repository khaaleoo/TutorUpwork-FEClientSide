/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Row, Col, Avatar, Icon, Button } from 'antd';
import dateFormat from 'dateformat';
import { addressDetail } from '../../utils/location';
import Logout from '../logout';
import '../_css/side.css';
import { useAuth } from '../../context/auth';
import Contract from './contractInfo';

const StudentHome = props => {
  const { authTokens } = useAuth();
  const { user } = authTokens;
  const { loadStudentData } = props;
  const [data, setData] = useState(false);
  const done = val => {
    if (val.length < 1) props.history.push('/');
    const temp = val[0];
    temp.address = addressDetail(val[0].address.city, val[0].address.district);
    setData(temp);
  };

  useEffect(() => {
    loadStudentData(user.id, done);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Row
        type="flex"
        justify="center"
        align="middle"
        className="loginRow"
        style={{ width: '90%' }}
      >
        <Col span={6} className="customCol">
          <div className="sideBox userSide">
            <div className="userInfoSide">
              <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}>THÔNG TIN CƠ BẢN</h3>
              <Avatar
                icon="user"
                style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                size={100}
                src={!data ? '' : data.avatar}
              >
                H
              </Avatar>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Học sinh</p>
              <div className="userInfo">
                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="user" style={{ marginRight: '5px' }} />
                    {!data ? 'Loading...' : data.name}
                  </p>
                </div>
                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="home" style={{ marginRight: '5px' }} />
                    {!data ? 'Loading...' : data.address.cityName.name}
                  </p>
                </div>
                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="home" style={{ marginRight: '5px' }} />
                    {!data ? 'Loading...' : data.address.disName.name}
                  </p>
                </div>

                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="man" style={{ marginRight: '5px' }} />
                    {!data ? 'Loading...' : `${data.gender} | ${dateFormat(data.birthday, 'yyyy')}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="userInfoSide">
              <Button
                type="primary"
                className="login-form-button"
                style={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                Chat
              </Button>
              <Button
                type="primary"
                className="login-form-button"
                style={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                Cập nhật thông tin
              </Button>
              <Logout />
            </div>
          </div>
        </Col>
        <Col span={18} className="customCol">
          <div className="sideBox userSide">
            <div className="contractSide">
              <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}>DANH SÁCH HỢP ĐỒNG</h3>
              <Contract data={data && data.contracts.length > 0 ? data : false} setData={setData} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StudentHome;
