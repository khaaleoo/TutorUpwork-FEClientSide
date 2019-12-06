import React from 'react';
import { Row, Col, Carousel, Icon, Avatar, Rate, Tag } from 'antd';
import './home.css';

const Home = () => {
  // để tạm

  return (
    <Row className="homeBox">
      <Carousel className="carousel" autoplay>
        <div className="carouselCard">
          <img className="imgCarousel" alt="" src="img/carousel/1.jpg" />
        </div>
        <div className="carouselCard">
          <img className="imgCarousel" alt="" src="img/carousel/2.jpg" />
        </div>
      </Carousel>

      <Carousel className="carousel tutorCarousel">
        <div className="carouselCard">
          <Row>
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

        <div className="carouselCard">
          <Row>
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
      </Carousel>

      <Row className="introBox">hihi</Row>
    </Row>
  );
};

export default Home;
