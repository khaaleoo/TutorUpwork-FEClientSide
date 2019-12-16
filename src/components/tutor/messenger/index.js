/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Row, Col } from 'antd';
import { ChatList } from 'react-chat-elements';
import { MessengerArea } from './history';
import './index.css';

export const Messenger = () => {
  return (
    <Row>
      <Col span={6}>
        <ChatList
          onClick={e => console.log(e)}
          onContextMenu={e => console.log(e)}
          className="chat-list"
          dataSource={[
            {
              id: 'a',
              avatar: 'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              unread: 2,
              dateString: 'vg',
              statusColor: 'red',
              statusColorType: 'encircle',
              lazyLoadingImage: 'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
            {
              avatar: 'https://facebook.github.io/react/img/logo.svg',
              alt: 'Reactjs',
              title: 'Facebook',
              subtitle: 'What are you doing?',
              date: new Date(),
              unread: 0,
            },
          ]}
        />
      </Col>
      <Col span={18}>
        <MessengerArea className="chat-list" />
      </Col>
    </Row>
  );
};
