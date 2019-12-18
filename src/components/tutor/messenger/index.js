/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { ChatList } from 'react-chat-elements';
import { MessengerArea } from './history';
import './index.css';
import { getMessages } from './action';
import { useAuth } from '../../../context/auth';

export const Messenger = () => {
  const { authTokens } = useAuth();
  const [data, setData] = useState([]);
  const [fullData, setfData] = useState([]);
  const [index, setIndex] = useState(0);
  const { user } = authTokens;
  useEffect(() => {
    getMessages(authTokens.token).then(e => {
      setfData(e.data);
      setData(
        e.data.map((val, i) => {
          const person = user.id === val.person1.id ? val.person2 : val.person1;
          const date = new Date(val.lastMess.date);
          return {
            index: i,
            id: person.id,
            avatar: person.avatar || '/img/user.png',
            alt: 'Reactjs',
            title: person.name || 'Unknow',
            subtitle: val.lastMess.content,
            dateString: `${date.getHours()}:${date.getMinutes()}`,
          };
        }),
      );
    });
  }, []);
  useEffect(() => () => console.log('unmount'), []);
  return (
    <Row>
      <Col span={6} style={{ backgroundColor: 'red' }}>
        <ChatList onClick={e => setIndex(e.index)} className="chat-list" dataSource={data} />
      </Col>
      <Col span={18}>
        <MessengerArea className="chat-list" data={fullData[index]} me={user.id} />
      </Col>
    </Row>
  );
};
