/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Avatar, Comment, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import dateFormat from 'dateformat';

import './comment.css';

const CommentNe = props => {
  let val = '';

  const { comments } = props;

  if (comments) {
    comments.forEach((v, i) => {
      const d = Date.parse(v.datetime);
      if (!Number.isNaN(d)) comments[i].datetime = dateFormat(v.datetime, 'HH:MM dd/mm/yyyy');
    });
  }
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!val) {
      return;
    }
    setSubmitting(true);

    const dataToComment = {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: <p style={{ textAlign: 'left' }}>{val}</p>,
      datetime: moment().fromNow(),
    };
    console.log(dataToComment);

    setSubmitting(false);
    val = '';
  };

  const handleChange = e => {
    val = e.target.value;
  };

  const CommentList = () => (
    <List
      dataSource={comments}
      header={`${comments.length} bình luận`}
      itemLayout="horizontal"
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderItem={p => <Comment {...p} />}
    />
  );

  const Editor = ({ onChange, onSubmit, submitting }) => (
    <div>
      <Form.Item>
        <Input.TextArea rows={4} onChange={onChange} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Bình luận
        </Button>
      </Form.Item>
    </div>
  );

  return (
    <div className="contractInfo">
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor onChange={handleChange} onSubmit={handleSubmit} submitting={isSubmitting} />
          }
        />
      </div>
    </div>
  );
};

export default CommentNe;
