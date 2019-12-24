import React from 'react';
import { Layout, Input, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { AccountIcon } from './dropdown';
import './header.css';

const header = props => {
  const { auth } = props;
  let user = false;
  if (auth !== undefined) {
    user = auth.user;
  }
  const { Header } = Layout;
  const { Search } = Input;
  return (
    <Header className="header" style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{ width: '100%', height: '100%' }}
      >
        <Col span={16} style={{ display: 'flex', height: '100%' }}>
          <Link to="/" style={{ display: 'flex' }}>
            <img alt="" src="/img/logo.png" style={{ alignSelf: 'center', height: '80%' }} />
          </Link>
          <Search
            onSearch={value => console.log(value)}
            style={{ alignSelf: 'center', width: '50%' }}
            className="searchHeader"
          />
          <Link
            to="/tutorlist"
            style={{ marginLeft: '10px', alignSelf: 'center', padding: '5px', color: 'white' }}
          >
            Danh sách giáo viên
          </Link>
        </Col>

        <Col span={4}>
          {user ? (
            <AccountIcon
              avatar={user.avatar}
              menuList={[
                { title: 'Trang của tôi', link: `/${user.role}` },
                { title: 'Thay đổi mật khẩu', link: `/changePassword` },
              ]}
            />
          ) : (
            <Link to="/login" style={{ padding: '5px', color: 'white' }}>
              Đăng nhập
            </Link>
          )}
        </Col>
      </Row>
    </Header>
  );
};

export default header;
