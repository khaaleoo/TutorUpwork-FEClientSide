/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { Row, Col, Avatar, Tag, Icon, Button, Rate, Menu } from 'antd';
import Contract from './contractInfo';
import Intro from './introduce';
import Comment from './comment';
import '../_css/side.css';

const TutorDetail = props => {
  const { loadTutorData, match } = props;
  const [menuItem, setMenuItem] = useState(['intro']);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState('');

  const skillTagHtml = [];

  const done = val => {
    console.log(val);

    if (val.length < 1) props.history.push('/');
    setData(val[0]);
    setIsLoading(false);
    if (!isLoading) {
      data.skills.forEach(skill => {
        skillTagHtml.push(<Tag color="blue">{skill}</Tag>);
      });
    }
  };

  useEffect(() => {
    loadTutorData(match.params.email, done);
  }, [isLoading]);

  const menuHandleClick = e => {
    setMenuItem([e.key]);
  };

  const Side = () => {
    if (menuItem[0] === 'intro') return <Intro intro={isLoading ? false : data.intro} />;
    if (menuItem[0] === 'history') return <Contract contract={isLoading ? false : data.contract} />;
    if (menuItem[0] === 'comment') return <Comment comments={isLoading ? false : data.comments} />;
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
                src={isLoading ? '' : data.avatar}
              >
                H
              </Avatar>

              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Gia sư</p>
              <Rate defaultValue={5} />
              <div className="userInfo">
                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="user" style={{ marginRight: '5px' }} />
                    {isLoading ? 'Loading...' : data.name}
                  </p>
                </div>

                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="home" style={{ marginRight: '5px' }} />
                    {isLoading ? 'Loading...' : data.address.city}
                  </p>
                </div>

                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="man" style={{ marginRight: '5px' }} />
                    {isLoading ? 'Loading...' : `${data.gender} | ${data.age} tuổi`}
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

export default TutorDetail;
