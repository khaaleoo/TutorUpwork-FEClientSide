/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import Logout from '../../logout';

export const AccountIcon = props => {
  const { menuList, avatar } = props;
  const MenuContent = menuList.map(val => (
    <Menu.Item key={Math.random()}>
      <Link to={val.link}>{val.title}</Link>
    </Menu.Item>
  ));
  MenuContent.push(
    <Menu.Item key={Math.random()}>
      <Logout />
    </Menu.Item>,
  );
  const menu = <Menu>{MenuContent}</Menu>;
  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Avatar src={avatar} shape="square" size={35} icon="user" />
    </Dropdown>
  );
};
