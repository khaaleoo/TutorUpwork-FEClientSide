/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import { Modal } from 'antd';
import React, { useState } from 'react';
import propTypes from 'prop-types';

export const MyModal = props => {
  const [visible, setVisible] = useState(true);
  const { result, content } = props;
  const handleOk = () => {
    result('OK');
    setVisible(false);
  };
  const handleCancel = () => {
    result('CANCEL');
    setVisible(false);
  };
  return (
    <Modal {...props} visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <p>{content}</p>
    </Modal>
  );
};

MyModal.propTypes = {
  result: propTypes.func.isRequired,
};
