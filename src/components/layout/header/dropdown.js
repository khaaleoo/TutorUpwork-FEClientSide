/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { Link } from 'react-router-dom';

export const AccountIcon = props => {
  const { menuList } = props;
  const MenuContent = menuList.map(val => (
    <Menu.Item key={Math.random()}>
      <Link to={val.link}>{val.title}</Link>
    </Menu.Item>
  ));
  const menu = <Menu>{MenuContent}</Menu>;
  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Avatar shape="square" size={35} icon="user" />
    </Dropdown>
  );
};
