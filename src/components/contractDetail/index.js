/* eslint-disable react/prop-types */
import React from 'react';
import { Modal } from 'antd';
import dateFormat from 'dateformat';
import { addressDetail } from '../../utils/location';

const ContractDetail = props => {
  const { modalState, setModalVisible, data, currentContract, userRole } = props;

  const handleCloseClick = () => {
    setModalVisible(false);
  };

  let benB = '';
  let addressB = false;
  if (data) {
    console.log(data);
    if (userRole !== 'student') {
      benB = data.contracts[currentContract].student;
    } else {
      benB = data.contracts[currentContract].tutor;
    }
    console.log(benB);
    addressB = addressDetail(benB.address.city, benB.address.district);
  }
  return (
    <div>
      {data && addressB ? (
        <Modal
          title="Thông tin hợp đồng"
          centered
          visible={modalState}
          onCancel={handleCloseClick}
          onOk={handleCloseClick}
        >
          <p>{`Bên A: ${data.name}`}</p>
          <p>{`Giới tính: ${data.gender}`}</p>
          <p>{`Ngày sinh: ${dateFormat(data.birthday, 'dd/mm/yyyy')}`}</p>
          <p>{`Địa chỉ: ${data.address.cityName.name} - ${data.address.disName.name}`}</p>

          <hr />

          <p>{`Bên B: ${benB.name}`}</p>
          <p>{`Giới tính: ${benB.gender}`}</p>
          <p>{`Ngày sinh: ${dateFormat(benB.birthday, 'dd/mm/yyyy')}`}</p>
          <p>{`Địa chỉ: ${addressB.cityName.name} - ${addressB.disName.name}`}</p>
          <hr />
          <p>
            {`Ngày thuê: ${dateFormat(data.contracts[currentContract].beginTime, 'dd/mm/yyyy')}`}
          </p>
          <p>
            {`Ngày hết hạn: ${dateFormat(data.contracts[currentContract].endTime, 'dd/mm/yyyy')}`}
          </p>
          <p>{`Tổng số giờ thuê: ${data.contracts[currentContract].totalHour}`}</p>
          <p>{`Giá/Giờ: ${data.contracts[currentContract].pricePerHour}`}</p>
          <p>{`Thành tiền: ${data.contracts[currentContract].totalPrice}`}</p>
          <p>{`Tình trạng: ${data.contracts[currentContract].status}`}</p>
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};
export default ContractDetail;
