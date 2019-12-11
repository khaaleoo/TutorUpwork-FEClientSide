/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar, Tag, Icon, Button, Rate, Menu, Statistic } from 'antd';
import Contract from './contractInfo';
import Intro from './introduce';
import Comment from './comment';
import { addressDetail } from '../../utils/location';
import LogOut from '../logout';
import '../_css/side.css';
import { useAuth } from '../../context/auth';

const TutorHome = props => {
  const { authTokens } = useAuth();
  const { user } = authTokens;
  const { loadTutorData } = props;
  const [menuItem, setMenuItem] = useState(['intro']);
  const [data, setData] = useState(false);
  const skillTagHtml = [];
  const done = val => {
    if (val.length < 1) props.history.push('/');
    const temp = val[0];
    temp.address = addressDetail(val[0].address.city, val[0].address.district);
    console.log(temp);
    setData(temp);
  };
  if (data) {
    data.skills.forEach(skill => {
      skillTagHtml.push(<Tag color="blue">{skill}</Tag>);
    });
  }
  // để tutor id ở đây để get info
  useEffect(() => {
    loadTutorData(user.id, done);
  }, []);

  const menuHandleClick = e => {
    setMenuItem([e.key]);
  };

  const Side = () => {
    console.log(data);
    if (menuItem[0] === 'intro') return <Intro intro={!data ? 'Loading...' : data.intro} />;
    if (menuItem[0] === 'history') return <Contract contracts={!data ? false : data.contracts} />;
    if (menuItem[0] === 'comment') return <Comment comments={!data ? false : data.comments} />;
    return <Intro />;
  };

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

              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Gia sư</p>
              <Rate value={data.star} disabled allowHalf />
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
                    <Icon type="man" style={{ marginRight: '5px' }} />
                    {!data ? 'Loading...' : `${data.gender} | ${data.age} tuổi`}
                  </p>
                </div>

                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p
                    style={{
                      fontWeight: 'bold',
                      margin: '0px',
                      lineHeight: 'normal',
                    }}
                  >
                    <Icon type="dollar" style={{ marginRight: '5px' }} />
                    <Statistic
                      groupSeparator="."
                      style={{ display: 'inline-block', fontSize: '20px' }}
                      value={!data ? 0 : data.price}
                    />{' '}
                    VND/giờ
                  </p>
                </div>
                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="book" style={{ marginRight: '5px' }} />
                    Kỹ năng
                  </p>
                </div>
                <div>{skillTagHtml}</div>
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
                Đặt
              </Button>
              <Link to="/me">
                <Button
                  type="primary"
                  className="login-form-button"
                  style={{ fontWeight: 'bold', marginBottom: '10px' }}
                >
                  Cập nhật thông tin
                </Button>
              </Link>
              <LogOut />
            </div>
          </div>
        </Col>
        <Col span={18} className="customCol">
          <div className="sideBox userSide">
            <div className="contractSide">
              <Menu onSelect={e => menuHandleClick(e)} selectedKeys={menuItem} mode="horizontal">
                <Menu.Item key="intro">
                  <Icon type="mail" />
                  <p style={{ fontWeight: 'bold', display: 'inline' }}> Giới thiệu</p>
                </Menu.Item>
                <Menu.Item key="history">
                  <Icon type="appstore" />
                  <p style={{ fontWeight: 'bold', display: 'inline' }}> Lịch sử</p>
                </Menu.Item>
                <Menu.Item key="comment">
                  <Icon type="question" />
                  <p style={{ fontWeight: 'bold', display: 'inline' }}> Đánh giá</p>
                </Menu.Item>
              </Menu>
              <Side />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TutorHome;
