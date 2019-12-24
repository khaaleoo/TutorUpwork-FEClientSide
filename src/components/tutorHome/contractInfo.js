/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Table, Tag, Dropdown, Button, Icon, Menu } from 'antd';
import Moment from 'react-moment';
import uuidv1 from 'uuid';
import Swal from 'sweetalert2';
import ContractDetail from '../contractDetail';
import { changeStatus } from './action';

const ConstractTable = props => {
  console.log(props);
  const { data, setData } = props;
  const { contracts } = data;

  const [modal, setShowModal] = useState(false);
  const [currentContract, setCurrentContract] = useState(0);

  const openModal = v => {
    setCurrentContract(v);
    setShowModal(true);
  };
  const changeDone = res => {
    const temp = { ...data };
    for (let i = 0; i < temp.contracts.length; i += 1) {
      if (res.idContract === temp.contracts[i].id) {
        temp.contracts[i].status = res.status;
        break;
      }
    }
    setData(temp);
  };

  const changeStatusHandle = (contract, stt, cb) => {
    if (contract.status !== 'Đã thanh toán') {
      Swal.fire('Thông báo', 'Chỉ có thể chấp nhận/từ chối hợp đồng đã thanh toán', 'error');
    } else changeStatus(contract.id, stt, cb);
  };
  const menu = [];
  if (contracts !== undefined)
    for (let i = 0; i < contracts.length; i += 1) {
      menu.push(
        <Menu key={uuidv1()}>
          <Menu.Item
            key="1"
            onClick={() => {
              changeStatusHandle(contracts[i], 'Đang thực hiện', changeDone);
            }}
          >
            Chấp nhận
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              changeStatusHandle(contracts[i], 'Đã huỷ', changeDone);
            }}
          >
            Từ chối
          </Menu.Item>
          <Menu.Item key="3" onClick={() => openModal(i)}>
            Xem chi tiết
          </Menu.Item>
        </Menu>,
      );
    }

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
            if (tag === 'Đã thanh toán') {
              color = 'yellow';
            }
            if (tag === 'Hoàn thành') {
              color = 'green';
            }
            if (tag === 'Đang thực hiện') {
              color = 'blue';
            }
            if (tag === 'Chưa thanh toán' || tag === 'Đã huỷ' || tag === 'Đang khiếu nại') {
              color = 'volcano';
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
    {
      title: 'Thao tác',
      key: 'action',
      render: i => (
        <span>
          <div id="components-dropdown-demo-dropdown-button" val={i.action}>
            <Dropdown overlay={menu[i.action]}>
              <Button>
                Thao tác
                <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
        </span>
      ),
    },
  ];

  const contractData = [];
  if (contracts !== false && contracts !== undefined) {
    contracts.forEach((v, i) => {
      if (v !== 'error' && v.student !== undefined)
        contractData.push({
          name: v.student.name,
          term: v.beginTime,
          hour: v.totalHour,
          price: `${v.totalPrice} VND`,
          status: [v.status],
          action: i,
        });
    });
  }

  return (
    <div className="contractInfo">
      <Table
        style={{ height: '100%' }}
        columns={columns}
        dataSource={contractData}
        scroll={{ y: 320 }}
      />
      <ContractDetail
        modalState={modal}
        setModalVisible={setShowModal}
        data={data}
        userRole="tutor"
        currentContract={currentContract}
      />
    </div>
  );
};

export default ConstractTable;
