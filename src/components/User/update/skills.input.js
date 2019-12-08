import React from 'react';
import { Select } from 'antd';

const { Option } = Select;
const SkillsInput = props => {
  const { optionList, getFieldDecorator, name, onChange } = props;
  const options = optionList.map(val => (
    <Option key={Math.random()} value={val.value} label={val.name}>
      {val.name}
    </Option>
  ));

  return getFieldDecorator(name, {
    rules: [{ required: true, message: 'Vui lòng chọn ít nhất một kỹ năng' }],
  })(
    <Select
      validateStatus="error"
      help="Please select the correct date"
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="select one option"
      onChange={onChange}
    >
      {options}
    </Select>,
  );
};
SkillsInput.defaultProps = {
  optionList: [{ value: 1, name: 'abc' }],
};
export default SkillsInput;
