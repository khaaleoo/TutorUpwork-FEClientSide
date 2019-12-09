/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Icon,
  Avatar,
  Rate,
  Tag,
  Slider,
  Select,
  Spin,
  Pagination,
  Statistic,
} from 'antd';
import { Link } from 'react-router-dom';
import { addressDetail, listCitys } from '../../utils/location';
import './tutorlist.css';

const { Option } = Select;
const TutorList = props => {
  const { loadListTutor, loadListSkill } = props;
  const [data, setData] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [tutorList, setTutorList] = useState(false);
  const [skillItems, setSkillItems] = useState(false);
  const handlePageChange = e => {
    setCurrentPage(e - 1);
  };
  const skills = [];

  if (skillItems) {
    skillItems.forEach(v => {
      skills.push(<Option key={v.name}>{v.name}</Option>);
    });
  }

  const addToTutorList = () => {
    if (data) {
      const tempTutorList = [];
      for (let i = 12 * currentPage; i < 12 * (currentPage + 1) && i < data.length; i += 1) {
        const v = data[i];
        const skillList = [];
        const { cityName } = addressDetail(v.address.city, v.address.district);
        tempTutorList.push(
          <Link to={`/tutordetail/${v.id}`} key={v.name} style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="userInfoSide tutorCard">
                <Avatar
                  icon="user"
                  style={{ backgroundColor: '#87d068', verticalAlign: 'middle' }}
                  size={100}
                  src={v.avatar}
                />
                <Rate
                  style={{ display: 'block', lineHeight: 'normal' }}
                  defaultValue={v.star}
                  disabled
                  allowHalf
                />
                <div className="userInfo">
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="user" style={{ marginRight: '5px' }} />
                      {v.name}
                    </p>
                  </div>
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="home" style={{ marginRight: '5px' }} />
                      {cityName.name}
                    </p>
                  </div>

                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="man" style={{ marginRight: '5px' }} />
                      {v.gender}|{v.age} tuổi
                    </p>
                  </div>
                  <div className="info">
                    <p
                      style={{
                        fontWeight: 'bold',
                        margin: '0px',
                        lineHeight: 'normal',
                      }}
                    >
                      <Icon type="dollar" style={{ marginRight: '5px' }} />
                      <Statistic
                        groupSeparator="."
                        style={{ display: 'inline-block' }}
                        value={!data ? 0 : v.price}
                      />{' '}
                      VND/giờ
                    </p>
                  </div>
                  <div className="info">
                    <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                      <Icon type="book" style={{ marginRight: '5px' }} />
                      Kỹ năng
                    </p>
                  </div>
                  <div style={{ height: '60px', overflow: 'hidden' }}>
                    {v.skills.forEach(skill => {
                      skillList.push(
                        <Tag key={skill} color="blue">
                          {skill}
                        </Tag>,
                      );
                    })}
                    {skillList}
                  </div>
                </div>
              </div>
            </Col>
          </Link>,
        );
      }
      setTutorList(tempTutorList);
    }
  };

  const loadTutordone = res => {
    setData(res);
  };
  const loadSkillDone = res => {
    setSkillItems(res);
  };

  useEffect(() => {
    loadListSkill(loadSkillDone);
    loadListTutor(loadTutordone);
  }, []);

  useEffect(() => {
    addToTutorList();
  }, [data, currentPage]);

  const addressCityChange = e => {
    console.log(e);
  };

  const addressDistrictChange = e => {
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

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Row
        type="flex"
        justify="center"
        align="middle"
        className="loginRow"
        style={{ width: '100%', paddingBottom: '50px' }}
      >
        <Col xs={6} className="customCol">
          <div className="tutorCarousel userSide">
            <h2 style={{ paddingTop: '10px', fontWeight: 'bold', color: 'white' }}>BỘ LỌC</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: 20,
                height: '100%',
              }}
            >
              <Select
                defaultValue={listCitys[0].id}
                style={{ margin: 20 }}
                onChange={addressCityChange}
              >
                {listCitys.map(province => (
                  <Option value={province.id} key={province.id}>
                    {province.name}
                  </Option>
                ))}
              </Select>
              <Select
                style={{ margin: 20 }}
                defaultValue={listCitys[0].id}
                onChange={addressDistrictChange}
              >
                {listCitys.map(city => (
                  <Option key={city.id}>{city.name}</Option>
                ))}
              </Select>

              <Slider
                min={0}
                max={1000000}
                onChange={e => priceHandleChange(e)}
                style={{ margin: 20 }}
                defaultValue={[0, 1000000]}
                range
              />

              <Select
                style={{
                  width: 200,
                  borderRadius: '5px',
                  height: '10px',
                  margin: 20,
                  paddingBottom: 50,
                }}
                mode="tags"
                onChange={skillHandleChange}
                tokenSeparators={[',']}
              >
                {skills}
              </Select>
            </div>
          </div>
        </Col>
        <Col xs={18} className="customCol">
          <div className="tutorCarousel userSide" style={{ marginRight: '20px' }}>
            <h2 style={{ paddingTop: '10px', fontWeight: 'bold', color: 'white' }}>
              DANH SÁCH GIÁO VIÊN
            </h2>

            <div className="carouselCard contractSide">
              <Row>
                {!tutorList ? (
                  <div>
                    <Col xs={6}>
                      <Spin style={{ padding: '0px 400px' }} size="large" />{' '}
                    </Col>
                  </div>
                ) : (
                  <div>
                    {tutorList}
                    <Pagination
                      style={{ padding: '10px' }}
                      onChange={handlePageChange}
                      pageSize={12}
                      total={!data ? 1 : data.length}
                    />
                  </div>
                )}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TutorList;
