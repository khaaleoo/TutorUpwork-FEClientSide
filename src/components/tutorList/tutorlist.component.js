import React from 'react';
import { Row, Col, Icon, Avatar, Rate, Tag, Menu, Slider, Dropdown, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import './tutorlist.css';

const TutorList = () => {
  const addressHandleChange = e => {
    console.log(e);
  };
  const priceHandleChange = e => {
    // e là mảng
    console.log(e);
  };
  const skillHandleChange = e => {
    // e là mảng
    console.log(e);
  };
  const address = (
    <Menu>
      <Menu.Item onClick={e => addressHandleChange(e)}>Quận 1</Menu.Item>
      <Menu.Item onClick={e => addressHandleChange(e)}>Quận 2</Menu.Item>
      <Menu.Item onClick={e => addressHandleChange(e)}>Quận 3</Menu.Item>
    </Menu>
  );

  const price = (
    <Menu>
      <Menu.Item>
        <Slider
          onChange={e => priceHandleChange(e)}
          style={{ width: '400px' }}
          defaultValue={[0, 30]}
          range
        />
      </Menu.Item>
    </Menu>
  );

  const skill = (
    <Checkbox.Group
      style={{ width: '100%', padding: '10px', background: 'white', borderRadius: '5px' }}
      onChange={e => skillHandleChange(e)}
    >
      <Row>
        <Col span={8}>
          <Checkbox value="A">CSS</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="B">Javascript</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="C">C#</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="D">HTML</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="E">Swift</Checkbox>
        </Col>
      </Row>
    </Checkbox.Group>
  );
  return (
    <Row className="homeBox">
      <div className="tutorCarousel">
        <h2 style={{ paddingTop: '10px', fontWeight: 'bold', color: 'white' }}>
          DANH SÁCH GIÁO VIÊN
        </h2>
        <div style={{ display: 'flex' }}>
          <h3 style={{ color: 'white', marginLeft: '20px' }}> Bộ lọc</h3>
          <Dropdown overlay={address} className="filterDropdown">
            <div>
              <p style={{ display: 'inline' }}> Địa chỉ</p>
              <Icon type="down" />
            </div>
          </Dropdown>
          <Dropdown overlay={price} className="filterDropdown">
            <div>
              <p style={{ display: 'inline' }}> Mức giá</p>
              <Icon type="down" />
            </div>
          </Dropdown>
          <Dropdown overlay={skill} className="filterDropdown">
            <div>
              <p style={{ display: 'inline' }}> Kỹ năng</p>
              <Icon type="down" />
            </div>
          </Dropdown>
        </div>

        <div className="carouselCard">
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Link to="/tutordetail">
                <div className="userInfoSide tutorCard">
                  <Avatar
                    icon="user"
                    style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                    size={100}
                  />
                  <Rate style={{ display: 'block', lineHeight: 'normal' }} defaultValue={5} />
                  <div className="userInfo">
                    <div className="info">
                      <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                        <Icon type="user" style={{ marginRight: '5px' }} />
                        Trần Đình Khải
                      </p>
                    </div>
                    <div className="info">
                      <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                        <Icon type="home" style={{ marginRight: '5px' }} />
                        Vinhomes
                      </p>
                    </div>

                    <div className="info">
                      <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                        <Icon type="man" style={{ marginRight: '5px' }} />
                        Nữ | 18 tuổi
                      </p>
                    </div>
                    <div className="info">
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
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="userInfoSide tutorCard">
                <Avatar
                  icon="user"
                  style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                  size={100}
                />
                <Rate style={{ display: 'block', lineHeight: 'normal' }} defaultValue={5} />
                <div className="userInfo">
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="user" style={{ marginRight: '5px' }} />
                      Trần Đình Khải
                    </p>
                  </div>
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="home" style={{ marginRight: '5px' }} />
                      Vinhomes
                    </p>
                  </div>

                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="man" style={{ marginRight: '5px' }} />
                      Nữ | 18 tuổi
                    </p>
                  </div>
                  <div className="info">
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
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="userInfoSide tutorCard">
                <Avatar
                  icon="user"
                  style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                  size={100}
                />
                <Rate style={{ display: 'block', lineHeight: 'normal' }} defaultValue={5} />
                <div className="userInfo">
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="user" style={{ marginRight: '5px' }} />
                      Trần Đình Khải
                    </p>
                  </div>
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="home" style={{ marginRight: '5px' }} />
                      Vinhomes
                    </p>
                  </div>

                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="man" style={{ marginRight: '5px' }} />
                      Nữ | 18 tuổi
                    </p>
                  </div>
                  <div className="info">
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
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="userInfoSide tutorCard">
                <Avatar
                  icon="user"
                  style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                  size={100}
                />
                <Rate style={{ display: 'block', lineHeight: 'normal' }} defaultValue={5} />
                <div className="userInfo">
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="user" style={{ marginRight: '5px' }} />
                      Trần Đình Khải
                    </p>
                  </div>
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="home" style={{ marginRight: '5px' }} />
                      Vinhomes
                    </p>
                  </div>

                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="man" style={{ marginRight: '5px' }} />
                      Nữ | 18 tuổi
                    </p>
                  </div>
                  <div className="info">
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
            </Col>

            <Col xs={6}>
              <div className="userInfoSide tutorCard">
                <Avatar
                  icon="user"
                  style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                  size={100}
                />
                <Rate style={{ display: 'block', lineHeight: 'normal' }} defaultValue={5} />
                <div className="userInfo">
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="user" style={{ marginRight: '5px' }} />
                      Trần Đình Khải
                    </p>
                  </div>
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="home" style={{ marginRight: '5px' }} />
                      Vinhomes
                    </p>
                  </div>

                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="man" style={{ marginRight: '5px' }} />
                      Nữ | 18 tuổi
                    </p>
                  </div>
                  <div className="info">
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
            </Col>
            <Col xs={6}>
              <div className="userInfoSide tutorCard">
                <Avatar
                  icon="user"
                  style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                  size={100}
                />
                <Rate style={{ display: 'block', lineHeight: 'normal' }} defaultValue={5} />
                <div className="userInfo">
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="user" style={{ marginRight: '5px' }} />
                      Trần Đình Khải
                    </p>
                  </div>
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="home" style={{ marginRight: '5px' }} />
                      Vinhomes
                    </p>
                  </div>

                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="man" style={{ marginRight: '5px' }} />
                      Nữ | 18 tuổi
                    </p>
                  </div>
                  <div className="info">
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
            </Col>
            <Col xs={6}>
              <div className="userInfoSide tutorCard">
                <Avatar
                  icon="user"
                  style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                  size={100}
                />
                <Rate style={{ display: 'block', lineHeight: 'normal' }} defaultValue={5} />
                <div className="userInfo">
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="user" style={{ marginRight: '5px' }} />
                      Trần Đình Khải
                    </p>
                  </div>
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="home" style={{ marginRight: '5px' }} />
                      Vinhomes
                    </p>
                  </div>

                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="man" style={{ marginRight: '5px' }} />
                      Nữ | 18 tuổi
                    </p>
                  </div>
                  <div className="info">
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
            </Col>
            <Col xs={6}>
              <div className="userInfoSide tutorCard">
                <Avatar
                  icon="user"
                  style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                  size={100}
                />
                <Rate style={{ display: 'block', lineHeight: 'normal' }} defaultValue={5} />
                <div className="userInfo">
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="user" style={{ marginRight: '5px' }} />
                      Trần Đình Khải
                    </p>
                  </div>
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="home" style={{ marginRight: '5px' }} />
                      Vinhomes
                    </p>
                  </div>

                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="man" style={{ marginRight: '5px' }} />
                      Nữ | 18 tuổi
                    </p>
                  </div>
                  <div className="info">
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
            </Col>
          </Row>
        </div>
      </div>
    </Row>
  );
};

export default TutorList;
