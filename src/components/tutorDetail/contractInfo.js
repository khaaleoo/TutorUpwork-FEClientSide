/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Table, Tag } from 'antd';
import uuidv1 from 'uuid/v1';
import Moment from 'react-moment';

const constractTable = props => {
  const { contracts } = props;
  console.log(props);
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
      render: val => <Moment format="DD/MM/YYYY">{val}</Moment>,
    },
    {
      title: 'Số giờ',
      dataIndex: 'hour',
      key: 'hour',
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
            if (tag === 'fail') {
              color = 'volcano';
            }
            if (tag === 'success') {
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

  const data = [];
  if (contracts !== false) {
    contracts.forEach(v => {
      if (v !== 'error' && v.student !== undefined)
        data.push({
          key: uuidv1(),
          name: v.student.name,
          term: v.beginTime,
          hour: v.totalHour,
          price: `${v.totalPrice} VND`,
          status: [v.status],
        });
    });
  }

  return (
    <div className="contractInfo">
      <Table style={{ height: '100%' }} columns={columns} dataSource={data} scroll={{ y: 320 }} />
    </div>
  );
};

export default constractTable;
