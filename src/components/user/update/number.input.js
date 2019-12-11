/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Input } from 'antd';

export const NumberInput = React.forwardRef((props, ref) => {
  const [number, setNumber] = useState(0);
  const { onChange, getFieldDecorator, name, ...rest } = props;
  const handleNumberChange = e => {
    const result = parseInt(e.target.value || 0, 10);
    if (Number.isNaN(result)) {
      return;
    }
    setNumber(result);
    if (onChange) onChange(result);
  };
  const checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Tự tin lên, đừng làm free chứ!!!');
  };
  return getFieldDecorator(name, {
    initialValue: 0,
    setFieldsValue: number,
    rules: [{ validator: checkPrice }],
  })(<Input ref={ref} {...rest} onChange={handleNumberChange} />);
});
