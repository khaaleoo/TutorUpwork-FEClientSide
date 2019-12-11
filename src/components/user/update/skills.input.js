import React from 'react';
import { Select } from 'antd';

const { Option } = Select;
const SkillsInput = React.forwardRef((props, ref) => {
  const { optionList, onChange, init } = props;
  const options = optionList.map(val => (
    <Option key={Math.random()} value={val.name}>
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
      defaultValue={init}
    >
      {options}
    </Select>
  );
});
export default SkillsInput;
