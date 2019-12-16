/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Button, Icon } from 'antd';
import { Input, MessageList } from 'react-chat-elements';
import './index.css';

export const MessengerArea = () => {
  const handleKeyDown = e => {
    console.log(e);
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  };

  const submit = (
    <Button
      type="primary"
      htmlType="submit"
      className="login-form-button"
      style={{ fontWeight: 'bold' }}
    >
      <Icon type="check" />
    </Button>
  );
  return (
    <div style={{ height: '100%' }}>
      <MessageList
        className="message-list"
        toBottomHeight="100%"
        dataSource={[
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
          {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum d2olor sit amet, consectetur adipisicing elit',
            date: new Date(),
          },
        ]}
      />
      <Input
        className="input"
        onKeyDown={handleKeyDown}
        placeholder="Type here..."
        autofocus
        rightButtons={submit}
      />
    </div>
  );
};
