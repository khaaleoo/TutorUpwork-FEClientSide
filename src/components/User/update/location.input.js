/* eslint-disable import/prefer-default-export */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Select } from 'antd';
import Types from 'prop-types';

const { Option } = Select;
export const LocationInput = React.forwardRef((props, ref) => {
  const { optionList } = props;
  const options = optionList.map(val => (
    <Option key={Math.random()} value={val.id}>
      {val.name}
    </Option>
  ));
  const { style, onChange, placeholder } = props;
  return (
    <Select
      style={style}
      defaultValue={0}
      ref={ref}
      showSearch
      optionFilterProp="children"
      onChange={onChange}
      placeholder={placeholder}
    >
      {options}
    </Select>
  );
});
LocationInput.propTypes = {
  onChange: Types.func,
  style: Types.object,
  placeholder: Types.string,
  optionList: Types.array,
};
LocationInput.defaultProps = {
  onChange: () => {},
  style: { width: 200 },
  placeholder: 'Chọn nơi ở',
  optionList: [],
};
