// eslint-disable-next-line max-classes-per-file
import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import './index.css';

export const UpdateForm = props => {
  const { form } = props;
  const { getFieldDecorator } = form;
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const name = 'Hoten';
  const nameInput = getFieldDecorator('hoten', {
    initialValue: name,
    rules: [{ required: true, message: 'Vui lòng nhập tên' }],
  })(<Input id="error2" />);
  const formStyle = { border: '2px solid white' };
  return (
    <Row>
      <Col span={10} offset={7}>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          style={formStyle}
          onSubmit={handleSubmit}
          className="myForm"
        >
          <Form.Item label="Họ Tên">{nameInput}</Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

// eslint-disable-next-line react/forbid-prop-types
UpdateForm.propTypes = { form: PropTypes.object.isRequired };

export default Form.create({ name: 'customized_form_controls' })(UpdateForm);
