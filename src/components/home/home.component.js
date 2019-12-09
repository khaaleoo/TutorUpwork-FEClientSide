/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Row, Col, Carousel, Icon, Avatar, Rate, Tag, Spin } from 'antd';
import { Link } from 'react-router-dom';
import './home.css';

const Home = props => {
  const { loadSpecialTutor } = props;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const SpecialTutorHtml = [];

  const addSpecial = () => {
    data.forEach(val => {
      const SkillsHtml = [];
      val.skills.forEach(skill => {
        SkillsHtml.push(<Tag color="blue">{skill}</Tag>);
      });
      SpecialTutorHtml.push(
        <Link to={`/${val.email}`}>
          <Col key={val.name} xs={6}>
            <div className="userInfoSide tutorCard">
              <Avatar
                icon="user"
                style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                size={100}
                src={val.avatar}
              />
              <Rate style={{ display: 'block', lineHeight: 'normal' }} defaultValue={val.star} />
              <div className="userInfo">
                <div className="info">
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="user" style={{ marginRight: '5px' }} />
                    {val.name}
                  </p>
                </div>
                <div className="info">
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="home" style={{ marginRight: '5px' }} />
                    {val.address.city}
                    {val.address.district}
                  </p>
                </div>

                <div className="info">
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="man" style={{ marginRight: '5px' }} />
                    {val.gender} | {val.age} tuổi
                  </p>
                </div>
                <div className="info">
                  <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                    <Icon type="book" style={{ marginRight: '5px' }} />
                    Kỹ năng
                  </p>
                </div>
                <div>{SkillsHtml}</div>
              </div>
            </div>
          </Col>
        </Link>,
      );
    });
  };
  const cb = res => {
    setData(res);
    setIsLoading(false);
  };
  useEffect(() => {
    loadSpecialTutor(cb);
  }, [isLoading]);
  addSpecial();

  return (
    <Row className="homeBox">
      <Carousel className="carousel" autoplay dotPosition="right">
        <div className="carouselCard">
          <img
            className="imgCarousel"
            alt=""
            src="C:\Users\trand\OneDrive\Pictures\Background-ppt\e.jpg"
          />
        </div>
        <div className="carouselCard">
          <img className="imgCarousel" alt="" src="img/carousel/2.jpg" />
        </div>
      </Carousel>

      <div className="tutorCarousel">
        <h2 style={{ paddingTop: '10px', fontWeight: 'bold', color: 'white' }}>
          GIÁO VIÊN NỔI BẬT
        </h2>
        <div>
          <ul className="circles">
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
          </ul>
        </div>
        {!isLoading ? (
          <Carousel className="carousel " autoplay>
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
          <div>
            <Spin style={{ padding: '100px' }} size="large" />
            <ul className="circles">
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
            </ul>
          </div>
        )}
      </div>
    </Row>
  );
};

export default Home;
