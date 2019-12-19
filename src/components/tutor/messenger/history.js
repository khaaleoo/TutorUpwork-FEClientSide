/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Button, Icon } from 'antd';
import { Input, MessageList } from 'react-chat-elements';
import './index.css';
// import { useAuth } from '../../../context/auth';

export const MessengerArea = props => {
  const { data, me } = props;
  // const {authTokens}=useAuth();
  const dataSource = data
    ? data.messages.map(val => ({
        position: val.id === me ? 'right' : 'left',
        type: 'text',
        text: val.content,
        date: val.date,
      }))
    : [];

  const handleKeyDown = e => {
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
  const onChange = ({ target }) => {
    console.log(target.value);
  };
  return (
    <div style={{ height: '100%' }}>
      <MessageList className="message-list" toBottomHeight="100%" dataSource={dataSource} />
      <Input
        className="input"
        onKeyDown={handleKeyDown}
        placeholder="Type here..."
        autofocus
        onChange={onChange}
        rightButtons={submit}
      />
    </div>
  );
};
