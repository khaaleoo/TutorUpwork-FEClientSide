/* eslint-disable import/prefer-default-export */
// import  from 'react';
import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import { Collapse } from 'antd';
import 'react-quill/dist/quill.snow.css'; // ES6

const { Panel } = Collapse;

export const Editor = props => {
  const { onChange } = props;
  const handleChange = html => {
    if (onChange) {
      if (!html || html === '<p><br></p>') {
        onChange(true);
      } else onChange(false, html);
    }
  };
  return (
    <Collapse bordered={false} style={{ marginTop: '20px' }}>
      <Panel header="CẬP NHẬT BÀI GIỚI THIỆU">
        <ReactQuill
          theme="snow"
          style={{ background: 'white' }}
          modules={Editor.modules}
          formats={Editor.formats}
          onChange={handleChange}
        />
      </Panel>
    </Collapse>
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
