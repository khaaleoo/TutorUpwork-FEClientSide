/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // ES6
import { Collapse, Form, Button } from 'antd';
import 'react-quill/dist/quill.snow.css'; // ES6
// eslint-disable-next-line import/no-unresolved
import { updateRequest } from './actions';

const { Panel } = Collapse;

export const Editor = props => {
  const { token, init } = props;
  const [html, setHtml] = useState('');
  const handleChange = content => setHtml(content);

  const [isLoading, setLoading] = useState(false);
  const updateIntro = e => {
    e.preventDefault();
    console.log(html);
    if (html) {
      const body = { intro: html };
      setLoading(true);
      updateRequest(token, body).finally(() => setLoading(false));
    }
  };

  return (
    <Form
      id="my"
      style={{ marginBottom: '10px', boxShadow: '10px 10px 38px 0px rgba(0, 0, 0, 0.75)' }}
      onSubmit={updateIntro}
    >
      <Collapse bordered={false}>
        <Panel header="CẬP NHẬT BÀI GIỚI THIỆU">
          <Form.Item wrapperCol={{ span: 24 }}>
            <ReactQuill
              theme="snow"
              style={{ background: 'white' }}
              modules={Editor.modules}
              formats={Editor.formats}
              onChange={handleChange}
              defaultValue={init}
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
              loading={isLoading}
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
