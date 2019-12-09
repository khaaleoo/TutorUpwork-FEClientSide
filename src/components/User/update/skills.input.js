/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;
const SkillsInput = React.forwardRef((props, ref) => {
  const { optionList, onChange } = props;
  const options = optionList.map(val => (
    <Option key={Math.random()} value={val.value} label={val.name}>
      {val.name}
    </Option>
  ));
  return (
    <Select
      ref={ref}
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="select one option"
      onChange={onChange}
    >
      {options}
    </Select>
  );
});
SkillsInput.defaultProps = {
  optionList: [{ value: 1, name: 'abc' }],
};
export default SkillsInput;
