/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Modal, InputNumber } from 'antd';
import dateFormat from 'dateformat';

const PaymentBox = props => {
  const { payModal, setPayModal, data } = props;
  const [totalHour, setTotalHour] = useState(1);

  const handleCloseClick = () => {
    setPayModal(false);
  };
  const handlePayClick = () => {};
  const onChange = e => {
    setTotalHour(e);
  };
  return (
    <div>
      {data ? (
        <Modal
          title="Thông tin thanh toán"
          centered
          visible={payModal}
          onCancel={handleCloseClick}
          onOk={handlePayClick}
        >
          <p>{`Giáo viên: ${data.name}`}</p>
          <p>{`Giới tính: ${data.gender}`}</p>
          <p>{`Ngày sinh: ${dateFormat(data.birthday, 'dd/mm/yyyy')}`}</p>
          <p>{`Địa chỉ: ${data.address.cityName.name} - ${data.address.disName.name}`}</p>
          <InputNumber min={1} max={10} defaultValue={totalHour} onChange={onChange} />
          <hr />
          <p>{`Ngày thuê: ${dateFormat(new Date(), 'dd/mm/yyyy')}`}</p>
          <p>{`Ngày hết hạn: ${dateFormat(new Date(), 'dd/mm/yyyy')}`}</p>
          <p>{`Tổng số giờ thuê: ${totalHour}`}</p>
          <p>{`Giá/Giờ:  ${data.price} VND`}</p>
          <p>{`Thành tiền: ${totalHour * data.price} VND`}</p>
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};
export default PaymentBox;
