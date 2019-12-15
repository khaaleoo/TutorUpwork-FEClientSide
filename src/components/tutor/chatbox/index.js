/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Icon, Input, Form, Button } from 'antd';
import { MessageBox, Avatar } from 'react-chat-elements';
import $ from 'jquery';
import './index.css';
import 'react-chat-elements/dist/main.css';

export const BubbleChat = props => {
  const { userData } = props;
  const [display, setDisplay] = useState(false);
  const [mess, setMess] = useState('');
  const [messages, addMess] = useState([]);

  const onChange = e => {
    setMess(e.target.value);
  };
  const openForm = () => {
    setDisplay(!display);
  };

  const messList = messages.map(val => (
    <MessageBox
      dateString={val.time}
      style={{ backgroundColor: 'red' }}
      position={val.isSender ? 'right' : 'left'}
      type="text"
      text={val.val}
    />
  ));

  const handleSubmit = e => {
    e.preventDefault();
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}`;
    addMess([...messages, { val: mess, time, isSender: true }]);
    setMess('');
    $('#mydiv').scrollTop($('#mydiv')[0].scrollHeight);
  };

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
            <Avatar>{userData ? userData.avatar : 'KHAI'}</Avatar>
          </div>
          <div className="form-container">
            <div
              id="mydiv"
              className="messageList"
              style={{ width: 300, height: 350, overflowY: 'scroll' }}
            >
              {messList}
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
