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
    if (userRole !== 'student') {
      if (data.contracts[currentContract].student !== undefined) {
        benB = data.contracts[currentContract].student;
        addressB = addressDetail(benB.address.city, benB.address.district);
      }
    } else if (data.contracts[currentContract].tutor !== undefined) {
      benB = data.contracts[currentContract].tutor;
      addressB = addressDetail(benB.address.city, benB.address.district);
    }
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
            {`Ngày thuê: ${dateFormat(
              data.contracts[currentContract].beginTime,
              'dd/mm/yyyy - hh:MM',
            )}`}
          </p>
          <p>
            {`Ngày kết thúc: ${dateFormat(
              data.contracts[currentContract].endTime,
              'dd/mm/yyyy - hh:MM',
            )}`}
          </p>
          <p>{`Tổng số giờ thuê: ${data.contracts[currentContract].totalHour}`}</p>
          <p>{`Giá/Giờ: ${data.contracts[currentContract].pricePerHour}`}</p>
          <p>{`Thành tiền: ${data.contracts[currentContract].totalPrice}`}</p>
          <p>{`Tình trạng: ${data.contracts[currentContract].status}`}</p>
          <p>
            {data.contracts[currentContract].status === 'Đang khiếu nại'
              ? `Lý do khiếu nại: 
            ${data.contracts[currentContract].reportInfo}`
              : ''}
          </p>
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};
export default ContractDetail;
