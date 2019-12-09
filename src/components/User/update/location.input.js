/* eslint-disable import/prefer-default-export */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Select } from 'antd';
import Types from 'prop-types';

const { Option } = Select;
export const LocationInput = React.forwardRef((props, ref) => {
  const { optionList, getFieldDecorator } = props;
  const options = optionList.map(val => (
    <Option key={Math.random()} value={val.id}>
      {val.name}
    </Option>
  ));
  const { style, onChange, onFocus, placeholder, onBlur, name } = props;
  return getFieldDecorator(name, {
    initialValue: 0,
    rules: [{ required: true, message: 'Please input your username!' }],
  })(
    <Select
      ref={ref}
      showSearch
      optionFilterProp="children"
      style={style}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      onBlur={onBlur}
    >
      {options}
    </Select>,
  );
});
LocationInput.propTypes = {
  onChange: Types.func,
  onBlur: Types.func,
  onFocus: Types.func,
  style: Types.object,
  placeholder: Types.string,
  optionList: Types.array,
  name: Types.string,
};
LocationInput.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  style: { width: 200 },
  placeholder: 'Chọn nơi ở',
  optionList: [],
  name: '',
};
