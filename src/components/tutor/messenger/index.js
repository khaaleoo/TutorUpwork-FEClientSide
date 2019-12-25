/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { Row, Col, Spin } from 'antd';
import { ChatList } from 'react-chat-elements';
import { MessengerArea } from './history';
import './index.css';
import { getMessages } from './action';
import { useAuth } from '../../../context/auth';

export const Messenger = () => {
  // ----------------------------------------------------------------------
  const { authTokens } = useAuth();
  const [fullData, setfData] = useState([]);
  const [index, setIndex] = useState(-1);
  // ----------------------------------------------------------------------
  const { user } = authTokens;
  const addMess = (content, i) => {
    const dt = fullData.slice();
    const target = i || index;
    const send = i === undefined;
    console.log(send);
    dt[target].messages.push({
      id: send ? authTokens.user.id : '',
      content,
      date: Date.now(),
    });
    dt[target].lastMess = {
      id: send ? authTokens.user.id : '',
      content,
      date: Date.now(),
    };
    console.log('sdvfv', dt[target].unread);
    dt[target].unread = dt[target].unread ? dt[target].unread + 1 : 1;
    if (send || target === index) dt[target].unread = 0;
    setfData(dt);
  };
  const maps = {};
  const dataSource = fullData.map((val, i) => {
    const person = user.id === val.person1.id ? val.person2 : val.person1;
    const date = new Date(val.lastMess.date);
    maps[val.room] = i;
    return {
      statusColorType: 'encircle',
      statusColor: i === index ? 'green' : null,
      unread: val.unread || 0,
      index: i,
      room: val.room,
      id: val.id,
      avatar: person.avatar || '/img/user.png',
      alt: 'Reactjs',
      title: i === index ? '=========>' : person.name || 'Unknow',
      subtitle: val.messages.length > 0 ? val.messages[val.messages.length - 1].content : '',
      dateString: `${date.getHours()}:${date.getMinutes()}`,
    };
  });
  useEffect(() => {
    getMessages(authTokens.token).then(e => {
      setfData(e.data);
      setIndex(0);
    });
  }, []);
  useEffect(
    () => () => {
      console.log('unmount');
      authTokens.socket.off('haveMessage');
    },
    [],
  );
  // ----------------------------------------------------------------------
  // --------------------------------------------------------
  authTokens.socket.off('haveMessage');
  authTokens.socket.on('haveMessage', (room, content) => {
    console.log('have mess', content);
    console.log(fullData);
    let found = false;
    for (let i = 0; i < fullData.length; i += 1) {
      if (fullData[i].room === room) {
        console.log('add');
        found = true;
        addMess(content, i);
        break;
      }
    }
    if (!found) {
      getMessages(authTokens.token).then(e => {
        setfData(e.data);
      });
    }
  });
  const select = e => {
    setIndex(e.index);
    const dt = fullData.slice();
    dt[e.index].unread = 0;
    setfData(dt);
  };
  return (
    <Row style={{ margin: 30, backgroundColor: '#e9ebf8', height: '79vh' }}>
      <Col span={6} style={{ backgroundColor: '' }}>
        <Spin spinning={index === -1}>
          <ChatList onClick={select} className="chat-list " dataSource={dataSource} />
        </Spin>
      </Col>
      <Col span={18}>
        {fullData[index] ? (
          <MessengerArea
            className="chat-list chatarea"
            data={fullData[index]}
            me={user.id}
            send={addMess}
          />
        ) : (
          <Spin spinning={index === -1}>
            <div className="chat-list chatarea" />
          </Spin>
        )}
      </Col>
    </Row>
  );
};
