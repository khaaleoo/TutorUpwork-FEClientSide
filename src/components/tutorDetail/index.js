import React from 'react';
import { Row, Col, Avatar, Table, Tag, Icon, Button, Rate } from 'antd';
import '../_css/side.css';

const TutorDetail = () => {
  // để tạm

  const columns = [
    {
      title: 'Tên người đặt',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'term',
      key: 'term',
    },
    {
      title: 'Tổng chi phí',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Tình trạng',
      key: 'status',
      dataIndex: 'status',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = 'green';
            if (tag === 'overdue') {
              color = 'volcano';
            }
            if (tag === 'valid') {
              color = 'green';
            }
            if (tag === 'pending') {
              color = 'orange';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Hổ Phong',
      term: '26/12/2019',
      price: '500.000 VND',
      status: ['pending'],
    },
    {
      key: '2',
      name: 'Huy Dừa',
      term: '26/12/2019',
      price: '500.000 VND',
      status: ['overdue'],
    },
    {
      key: '3',
      name: 'Sumeo',
      term: '26/12/2019',
      price: '500.000 VND',
      status: ['valid'],
    },
    {
      key: '3',
      name: 'Lê Thị Minh Thư',
      term: '26/12/2019',
      price: '500.000 VND',
      status: ['valid'],
    },
    {
      key: '3',
      name: 'Lê Thị Minh Thư',
      term: '26/12/2019',
      price: '500.000 VND',
      status: ['valid'],
    },
    {
      key: '3',
      name: 'Lê Thị Minh Thư',
      term: '26/12/2019',
      price: '500.000 VND',
      status: ['valid'],
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Row
        type="flex"
        justify="center"
        align="middle"
        className="loginRow"
        style={{ width: '90%' }}
      >
        <Col span={6} className="customCol">
          <div className="sideBox userSide">
            <div className="userInfoSide">
              <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}>THÔNG TIN CƠ BẢN</h3>
              <Avatar
                icon="user"
                style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                size={100}
              >
                H
              </Avatar>

              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Gia sư</p>
              <Rate defaultValue={5} />
              <div className="userInfo">
                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="user" style={{ marginRight: '5px' }} />
                    Trần Đình Khải
                  </p>
                </div>

                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="home" style={{ marginRight: '5px' }} />
                    Vinhomes
                  </p>
                </div>

                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="man" style={{ marginRight: '5px' }} />
                    Nữ | 18 tuổi
                  </p>
                </div>
                <div className="info" style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="book" style={{ marginRight: '5px' }} />
                    Kỹ năng
                  </p>
                </div>
                <div>
                  <Tag color="blue">Thiên văn học</Tag>
                  <Tag color="blue">Thư học</Tag>
                  <Tag color="blue">Toán học</Tag>
                  <Tag color="blue">CSS</Tag>
                  <Tag color="blue">CSS</Tag>
                </div>
              </div>
            </div>
            <div className="userInfoSide">
              <Button
                type="primary"
                className="login-form-button"
                style={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                Chat
              </Button>
              <Button
                type="primary"
                className="login-form-button"
                style={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                Đặt
              </Button>
            </div>
          </div>
        </Col>
        <Col span={18} className="customCol">
          <div className="sideBox userSide">
            <div className="contractSide">
              <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}>LỊCH SỬ NGƯỜI DẠY</h3>
              <div className="contractInfo">
                <Table
                  style={{ height: '100%' }}
                  columns={columns}
                  dataSource={data}
                  scroll={{ y: 320 }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TutorDetail;
