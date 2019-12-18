/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Icon, Input, Form, Button, Avatar, Alert } from 'antd';
import { MessageBox } from 'react-chat-elements';
import $ from 'jquery';
import './index.css';
import 'react-chat-elements/dist/main.css';
import { useAuth } from '../../../context/auth';

export const BubbleChat = props => {
  const { authTokens } = useAuth();
  const { userData } = props;
  const [display, setDisplay] = useState(false);
  const [mess, setMess] = useState('');
  const [messages, addMess] = useState([]);
  const [isError, hasError] = useState(false);
  const [room, setRoom] = useState(false);
  const onChange = e => {
    setMess(e.target.value);
  };
  const openForm = () => {
    setDisplay(!display);
  };
  console.log(`userData`, userData);
  const messList = messages.map(val => (
    <MessageBox
      key={Math.random()}
      dateString={val.time}
      position={val.isSender ? 'right' : 'left'}
      type="text"
      text={val.val}
    />
  ));
  const handleSubmit = e => {
    e.preventDefault();
    if (!authTokens.token) {
      setMess('');
      return hasError(true);
    }
    if (!mess) return false;
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}`;
    addMess([...messages, { val: mess, time, isSender: true }]);
    setMess('');
    if (!room) {
      authTokens.socket.emit('start', authTokens.user.id, userData.id, mess);
    } else {
      authTokens.socket.emit('chat', room, mess);
    }
    return $('#mydiv').scrollTop($('#mydiv')[0].scrollHeight);
  };
  authTokens.socket.on('ready', r => {
    console.log('room', r);
    setRoom(r);
    console.log('ready');
  });
  const iconStyle = {
    fontSize: 30,
  };
  return (
    <div>
      <button className="open-button" onClick={openForm} type="button">
        {display ? (
          <Icon type="close" style={iconStyle} />
        ) : (
          <Icon type="message" style={iconStyle} />
        )}
      </button>
      <Form onSubmit={handleSubmit}>
        <div className={`chat-popup ${display ? 'show' : 'hiden'}`} id="myForm">
          <div className="headerChat">
            <Avatar size={50} src={userData ? userData.avatar : 'KHAI'} className="abc" />
            <p>{userData ? userData.name : 'KHAI'}</p>
          </div>
          <div className="form-container">
            <div
              id="mydiv"
              className="messageList"
              style={{ width: 320, height: 350, overflowY: 'scroll' }}
            >
              {messList}
              {isError ? <Alert message="Đăng nhập để có thể gửi tin nhắn" type="error" /> : ''}
              <div style={{ height: 50 }} />
            </div>
          </div>
          <Form.Item style={{ backgroundColor: '#A5CBC3', margin: 0, padding: 5 }}>
            <Form.Item
              wrapperCol={{ span: 24 }}
              style={{
                width: '75%',
                display: 'inline-block',
                margin: '0px 10px',
              }}
            >
              <Input onChange={onChange} value={mess} />
            </Form.Item>
            <Form.Item
              style={{
                display: 'inline-block',
                margin: '0px',
                marginRight: 10,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ fontWeight: 'bold' }}
              >
                <Icon type="check" />
              </Button>
            </Form.Item>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
