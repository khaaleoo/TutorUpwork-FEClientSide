import React from 'react';
import { Table, Tag } from 'antd';

const constractTable = () => {
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
    <div className="contractInfo">
      <Table style={{ height: '100%' }} columns={columns} dataSource={data} scroll={{ y: 320 }} />
    </div>
  );
};

export default constractTable;
