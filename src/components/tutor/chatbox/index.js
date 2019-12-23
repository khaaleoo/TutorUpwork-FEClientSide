/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import { Icon, Input, Form, Button, Avatar, Alert } from 'antd';
import { MessageBox } from 'react-chat-elements';
import $ from 'jquery';
import './index.css';
import 'react-chat-elements/dist/main.css';
import { useAuth } from '../../../context/auth';
import { getMessages } from './action';

export const BubbleChat = props => {
  const { authTokens } = useAuth();
  const { userData } = props;
  console.log('userData', userData);
  const [display, setDisplay] = useState(false);
  const [mess, setMess] = useState('');
  const [messages, addMess] = useState([]);
  const [isError, hasError] = useState(false);
  const [room, setRoom] = useState(false);
  const [fisrt, setTime] = useState(true);
  useEffect(() => {
    getMessages(authTokens.token, authTokens.user.id, userData.id).then(result => {
      console.log('getOne', result);
      if (result.data) {
        setRoom(result.data.room);
        addMess(
          result.data.messages.map(val => ({
            isSender: val.id === authTokens.user.id,
            val: val.content,
            date: val.time,
          })),
        );
      }
    });
  }, []);
  const onChange = e => {
    setMess(e.target.value);
  };
  const openForm = () => {
    setDisplay(!display);
  };

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
    if (fisrt) {
      setTime(false);
      authTokens.socket.emit('start', authTokens.user.id, userData.id, mess);
    } else {
      authTokens.socket.emit('chat', room, mess);
    }
    return $('#mydiv').scrollTop($('#mydiv')[0].scrollHeight);
  };
  authTokens.socket.on('join', r => {
    setRoom(r);
    console.log('join', r);
  });
  const iconStyle = {
    fontSize: 30,
  };
  authTokens.socket.off('haveMessage');
  authTokens.socket.on('haveMessage', (_room, content) => {
    const m = messages.slice();
    m.push({
      time: new Date(),
      isSender: false,
      val: content,
    });
    addMess(m);
  });
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
