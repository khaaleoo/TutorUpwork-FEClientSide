/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // ES6
import { Collapse, Form, Button } from 'antd';
import 'react-quill/dist/quill.snow.css'; // ES6

const { Panel } = Collapse;

export const Editor = () => {
  const [html, setHtml] = useState('');
  const handleChange = content => {
    setHtml(content);
  };
  const updateIntro = e => {
    e.preventDefault();
    console.log(html);
  };
  return (
    <Form id="my" style={{ marginBottom: '50px' }} onSubmit={updateIntro}>
      <Collapse bordered={false} style={{ marginTop: '20px' }}>
        <Panel header="CẬP NHẬT BÀI GIỚI THIỆU">
          <Form.Item wrapperCol={{ span: 24 }}>
            <ReactQuill
              theme="snow"
              style={{ background: 'white' }}
              modules={Editor.modules}
              formats={Editor.formats}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', width: '70%' }}></Form.Item>
          <Form.Item style={{ display: 'inline-block', width: '30%' }}>
            <Button
              type="primary"
              formTarget="my"
              htmlType="submit"
              className="login-form-button"
              style={{ fontWeight: 'bold', marginTop: '20px' }}
            >
              Cập nhật
            </Button>
          </Form.Item>
        </Panel>
      </Collapse>
    </Form>
  );
};
Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};
Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
];
