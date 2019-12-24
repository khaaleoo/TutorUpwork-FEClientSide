/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Table, Menu, Tag, Dropdown, Button, Icon } from 'antd';
import Moment from 'react-moment';
import Swal from 'sweetalert2';
import uuidv1 from 'uuid/v1';
import ContractDetail from '../contractDetail';
import { endContract, reportContract, changeStatus, payRequest } from './action';

const ConstractTable = props => {
  const { data, setData } = props;
  const { contracts } = data;

  const [modal, setShowModal] = useState(false);
  const [currentContract, setCurrentContract] = useState(0);

  const watchContractDetail = v => {
    setCurrentContract(v);
    setShowModal(true);
  };

  const closeContractDone = p => {
    console.log('ress', p);
    const temp = { ...data };
    for (let i = 0; i < temp.contracts.length; i += 1) {
      if (p.idContract === temp.contracts[i].id) {
        temp.contracts[i].status = 'Hoàn thành';
        temp.contracts[i].endTime = p.endTime;
        break;
      }
    }
    setData(temp);
  };

  const reportDone = p => {
    const temp = { ...data };
    for (let i = 0; i < temp.contracts.length; i += 1) {
      if (p.idContract === temp.contracts[i].id) {
        temp.contracts[i].status = 'Đang khiếu nại';
        temp.contracts[i].reportInfo = p.reportInfo;
        break;
      }
    }
    setData(temp);
  };

  const reportcontract = v => {
    console.log(v.status);
    if (v.status === 'Đã thanh toán' || v.status === 'Đang thực hiện') {
      Swal.fire({
        title: 'Nhập lí do',
        text: 'Lưu ý: Khi khiếu nại, admin có quyền truy cập tin nhắn giữa hai người !',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Khiếu nại',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),
        preConfirm: login => {
          reportContract(v.id, login, reportDone);
        },
      });
    } else
      Swal.fire('Thông báo', 'Hợp đồng đã đóng hoặc chưa thanh toán không thể khiếu nại', 'error');
  };

  const CloseContract = v => {
    if (v.status === 'Đang thực hiện' || v.status === 'Đang khiếu nại') {
      Swal.fire({
        title: 'Đóng hợp đồng ngay ! ',
        text: 'Bạn sẽ không hoàn tác được!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đóng ngay',
      }).then(result => {
        if (result.value) {
          console.log(v);
          endContract(v.id, v.tutorId, closeContractDone);
        }
      });
    } else
      Swal.fire(
        'Thông báo',
        'Không thể đóng hợp đồng chưa thanh toán, đã thanh toán, đã hoàn thành',
        'error',
      );
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
    if (contract.status !== 'Chưa thanh toán') {
      Swal.fire('Thông báo', 'Chỉ có thể huỷ hợp đồng chưa thanh toán', 'error');
    } else changeStatus(contract.id, stt, cb);
  };
  const pay = contract => {
    if (contract.status !== 'Chưa thanh toán') {
      Swal.fire('Thông báo', 'Hợp đồng của bạn đã thanh toán rồi', 'error');
    } else payRequest(contract.totalPrice, 'NCB', contract.id, () => {});
  };
  const menu = [];
  if (data.contracts !== undefined) {
    for (let i = 0; i < data.contracts.length; i += 1) {
      menu.push(
        <Menu key={uuidv1()}>
          <Menu.Item key="1" onClick={() => pay(contracts[i])}>
            Thanh toán
          </Menu.Item>
          <Menu.Item key="2" onClick={() => changeStatusHandle(contracts[i], 'Đã hủy', changeDone)}>
            Huỷ hợp đồng
          </Menu.Item>
          <Menu.Item key="3" onClick={() => CloseContract(contracts[i])}>
            Kết thúc
          </Menu.Item>
          <Menu.Item key="4" onClick={() => reportcontract(contracts[i])}>
            Khiếu nại
          </Menu.Item>
          <Menu.Item key="5" onClick={() => watchContractDetail(i)}>
            Xem chi tiết
          </Menu.Item>
        </Menu>,
      );
    }
  }

  const contractData = [];
  if (contracts !== false && contracts !== undefined) {
    for (let i = 0; i < contracts.length; i += 1) {
      const v = contracts[i];
      if (v !== 'error')
        contractData.push({
          key: uuidv1(),
          name: v.tutor.name,
          term: v.beginTime,
          hour: v.totalHour,
          price: `${v.totalPrice} VND`,
          status: [v.status],
          action: i,
        });
    }
  }

  const columns = [
    {
      title: 'Tên giáo viên',
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
      title: 'Tổng giờ thuê',
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
            if (tag === 'Chưa thanh toán' || tag === 'Đã hủy' || tag === 'Đang khiếu nại') {
              color = 'volcano';
            }

            return (
              <Tag key={uuidv1()} color={color}>
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
        userRole="student"
        currentContract={currentContract}
      />
    </div>
  );
};

export default ConstractTable;
