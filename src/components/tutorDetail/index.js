import React, { useState } from 'react';
import { Row, Col, Avatar, Tag, Icon, Button, Rate, Menu } from 'antd';
import Contract from './contractInfo';
import Intro from './introduce';

// import Comment from './comment';

import '../_css/side.css';

const TutorDetail = () => {
  const [menuItem, setMenuItem] = useState(['intro']);
  const menuHandleClick = e => {
    setMenuItem([e.key]);
  };
  const Side = () => {
    if (menuItem[0] === 'intro') return <Intro />;
    if (menuItem[0] === 'history') return <Contract />;
    // if (menuItem[0] === 'comment') return <Comment />;
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
              >
                H
              </Avatar>

              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Gia sư</p>
              <Rate defaultValue={5} />
              <div className="userInfo">
                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="user" style={{ marginRight: '5px' }} />
                    Trần Đình Khải
                  </p>
                </div>

                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="home" style={{ marginRight: '5px' }} />
                    Vinhomes
                  </p>
                </div>

                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="man" style={{ marginRight: '5px' }} />
                    Nữ | 18 tuổi
                  </p>
                </div>
                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="book" style={{ marginRight: '5px' }} />
                    Kỹ năng
                  </p>
                </div>
                <div>
                  <Tag color="blue">Thiên văn học</Tag>
                  <Tag color="blue">Thư học</Tag>
                  <Tag color="blue">Toán học</Tag>
                  <Tag color="blue">CSS</Tag>
                  <Tag color="blue">CSS</Tag>
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
                  Giới thiệu
                </Menu.Item>
                <Menu.Item key="history">
                  <Icon type="appstore" />
                  Lịch sử
                </Menu.Item>
                <Menu.Item key="comment">
                  <Icon type="comment" />
                  Đánh giá
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
