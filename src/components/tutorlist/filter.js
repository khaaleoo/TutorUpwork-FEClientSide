/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { Col, Slider, Select } from 'antd';
import { listCitys, listDistricts } from '../../utils/location';
import { loadListSkill, loadListByFilter } from '../../reducers/actions';

const { Option } = Select;
const Filter = props => {
  const { setData, setCurrentPage, setTutorList } = props;
  const [skillItems, setSkillItems] = useState([]);
  const [listDist, setlistDist] = useState([]);
  const [filter, setFilter] = useState({
    city: -1,
    district: -1,
    price: [0, 1000000],
    skills: false,
  });
  const loadSkillDone = res => {
    setSkillItems(res);
  };

  const loadTutorDone = res => {
    setData(res);
  };

  useEffect(() => {
    loadListSkill(loadSkillDone);
  }, []);

  const addressCityChange = e => {
    setData(false);
    setTutorList(false);
    setlistDist(listDistricts(e));
    setCurrentPage(0);
    const tempFilter = filter;
    tempFilter.city = e;
    setFilter(tempFilter);
    loadListByFilter(tempFilter, loadTutorDone);
  };

  const addressDistrictChange = e => {
    setData(false);
    setTutorList(false);

    setCurrentPage(0);
    const tempFilter = filter;
    tempFilter.district = e;
    setFilter(tempFilter);
    loadListByFilter(tempFilter, loadTutorDone);
  };
  const priceHandleChange = e => {
    setData(false);
    setTutorList(false);
    setCurrentPage(0);
    const tempFilter = filter;
    tempFilter.price = e;
    setFilter(tempFilter);
    loadListByFilter(tempFilter, loadTutorDone);
  };
  const skillHandleChange = e => {
    setData(false);
    setTutorList(false);

    setCurrentPage(0);
    const tempFilter = filter;
    tempFilter.skills = e;
    setFilter(tempFilter);
    loadListByFilter(tempFilter, loadTutorDone);
  };

  return (
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
          <p style={{ fontWeight: 'bold', color: 'white', lineHeight: 'normal' }}>Tỉnh/TP</p>
          <Select
            defaultValue={-1}
            style={{ margin: '0px 20px 20px 20px' }}
            onChange={addressCityChange}
          >
            <Option value={-1}>Tất cả</Option>
            {listCitys.map(province => (
              <Option value={province.id} key={province.id}>
                {province.name}
              </Option>
            ))}
          </Select>
          <p style={{ fontWeight: 'bold', color: 'white', lineHeight: 'normal' }}>Quận/Huyện</p>
          <Select
            style={{ margin: '0px 20px 20px 20px' }}
            defaultValue={-1}
            onChange={e => addressDistrictChange(e)}
          >
            <Option value={-1}>Tất cả</Option>
            {listDist.map(dist => (
              <Option value={dist.id} key={dist.id}>
                {dist.name}
              </Option>
            ))}
          </Select>
          <p style={{ fontWeight: 'bold', color: 'white', lineHeight: 'normal' }}>Giá</p>
          <Slider
            min={0}
            max={1000000}
            onAfterChange={e => priceHandleChange(e)}
            style={{ margin: '0px 20px 20px 20px' }}
            defaultValue={[0, 1000000]}
            range
          />
          <p style={{ fontWeight: 'bold', color: 'white', lineHeight: 'normal' }}>Kỹ năng</p>
          <Select
            style={{
              width: 200,
              borderRadius: '5px',
              height: '10px',
              margin: '0px 20px 20px 20px',
              paddingBottom: 50,
            }}
            mode="tags"
            onChange={skillHandleChange}
            tokenSeparators={[',']}
          >
            {skillItems.map(skill => (
              <Option key={skill.name}>{skill.name}</Option>
            ))}
          </Select>
        </div>
      </div>
    </Col>
  );
};

export default Filter;
