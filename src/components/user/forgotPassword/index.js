/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Steps, Row, Col, Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';
import { Email } from './inputEmail.js';
import { Code } from './inputCode.js';
import { ChangePassword } from './changePass';

export const ForgotPassword = () => {
  const { Step } = Steps;
  const [current, setCurrent] = useState(0);
  const next = () => {
    if (current < 3) setCurrent(current + 1);
  };
  const [email, setEmail] = useState('');

  const steps = [
    {
      content: <Email next={next} setEmail={setEmail} />,
    },
    {
      content: <Code next={next} email={email} />,
    },
    {
      content: <ChangePassword next={next} email={email} />,
    },
    {
      content: (
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server"
        />
      ),
    },
  ];
  return (
    <Row className="mycom">
      <Col span={20} offset={2} className="mySteps">
        <Row className="myrow">
          <Col span={4}>
            <Steps direction="vertical" labelPlacement="vertical" current={current} className="my">
              <Step title="EMAIL" />
              <Step title="CODE" />
              <Step title="PASSWORD" />
              <Step title="Done" />
            </Steps>
          </Col>
          <Col span={20}>
            <div className="steps-content">{steps[current].content}</div>
          </Col>
          <Link to="/">
            <Button type="primary" key="console" style={{ float: 'right' }}>
              Trang Chủ
            </Button>
          </Link>
        </Row>
      </Col>
    </Row>
  );
};
