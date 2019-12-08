import React from 'react';
import { Table, Tag } from 'antd';
import Moment from 'react-moment';

const constractTable = props => {
  const { contract } = props;

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

  const data = [];
  if (contract !== false) {
    contract.forEach(v => {
      data.push({
        key: '1',
        name: v.name,
        term: v.endTime,
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
