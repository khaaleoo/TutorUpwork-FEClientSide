/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Row, Col, Carousel, Icon, Avatar, Rate, Tag, Spin, Statistic } from 'antd';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import uuidv1 from 'uuid/v1';
import './home.css';
import { addressDetail } from '../../utils/location';
import { loadSpecialTutor } from '../../reducers/actions';

const Home = () => {
  const [data, setData] = useState(false);
  const SpecialTutorHtml = [];

  if (data) {
    data.forEach(val => {
      const { cityName } = addressDetail(val.address.city, val.address.district);
      const SkillsHtml = [];
      val.skills.forEach(skill => {
        SkillsHtml.push(
          <Tag key={uuidv1()} color="blue">
            {skill}
          </Tag>,
        );
      });
      SpecialTutorHtml.push(
        <Link to={`/tutordetail/${val.id}`} style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
          <Col key={val.name} xs={6}>
            <div className="userInfoSide tutorCard">
              <Avatar
                icon="user"
                style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                size={100}
                src={val.avatar}
              />
              <Rate
                style={{ display: 'block', lineHeight: 'normal' }}
                defaultValue={val.star}
                disabled
              />
              <div className="userInfo">
                <div className="info">
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="user" style={{ marginRight: '5px' }} />
                    {val.name}
                  </p>
                </div>
                <div className="info">
                  <p
                    style={{
                      fontWeight: 'bold',
                      marginBottom: '2px',
                      maxHeight: '20px',
                      overflow: 'hidden',
                    }}
                  >
                    <Icon type="home" style={{ marginRight: '5px' }} />
                    {cityName.name}
                  </p>
                </div>

                <div className="info">
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="man" style={{ marginRight: '5px' }} />
                    {val.gender} | {dateFormat(val.birthday, 'yyyy')} tuổi
                  </p>
                </div>
                <div className="info">
                  <Icon type="dollar" style={{ marginRight: '5px' }} />
                  <Statistic
                    groupSeparator="."
                    style={{
                      display: 'inline-block',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      margin: '0px',
                      lineHeight: 'normal',
                    }}
                    value={!data ? 0 : val.price}
                  />
                  <p
                    style={{
                      display: 'inline-block',
                      fontWeight: 'bold',
                      margin: '0px',
                      lineHeight: 'normal',
                    }}
                  >
                    {' '}
                    VND/giờ
                  </p>
                </div>
                <div className="info">
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="book" style={{ marginRight: '5px' }} />
                    Kỹ năng
                  </p>
                </div>
                <div style={{ height: '60px', overflow: 'hidden' }}>{SkillsHtml}</div>
              </div>
            </div>
          </Col>
        </Link>,
      );
    });
  }
  const cb = res => {
    setData(res);
  };
  useEffect(() => {
    loadSpecialTutor(cb);
  }, []);

  return (
    <Row className="homeBox">
      <Carousel className="carousel" autoplay dotPosition="right">
        <div className="carouselCard">
          <img className="imgCarousel" alt="" src="img/carousel/1.jpg" />
        </div>
        <div className="carouselCard">
          <img className="imgCarousel" alt="" src="img/carousel/2.jpg" />
        </div>
      </Carousel>

      <div className="tutorCarousel">
        <h2 style={{ paddingTop: '10px', fontWeight: 'bold', color: 'white' }}>
          GIÁO VIÊN NỔI BẬT
        </h2>

        {data ? (
          <Carousel className="carousel specialCarousel" autoplay>
            <div className="carouselCard">
              <Row>
                {SpecialTutorHtml[0]}
                {SpecialTutorHtml[1]}
                {SpecialTutorHtml[2]}
                {SpecialTutorHtml[3]}
              </Row>
            </div>

            <div className="carouselCard">
              <Row>
                {SpecialTutorHtml[4]}
                {SpecialTutorHtml[5]}
                {SpecialTutorHtml[6]}
                {SpecialTutorHtml[7]}
              </Row>
            </div>
          </Carousel>
        ) : (
          <Spin style={{ padding: '100px' }} size="large" />
        )}
      </div>
    </Row>
  );
};

export default Home;
