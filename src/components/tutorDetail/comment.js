/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Avatar, Comment, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import dateFormat from 'dateformat';
import { comment } from './action';

import './comment.css';

const CommentNe = props => {
  let val = '';

  const { comments, user } = props;

  if (comments) {
    comments.forEach((v, i) => {
      const d = Date.parse(v.datetime);
      if (!Number.isNaN(d)) comments[i].datetime = dateFormat(v.datetime, 'HH:MM dd/mm/yyyy');
    });
  }
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    console.log(val);
    if (!val) {
      return;
    }
    console.log(val);
    setSubmitting(true);

    const dataToComment = {
      author: 'Han Solo',
      avatar: user.avatar,
      content: { val },
      datetime: moment().fromNow(),
    };
    console.log(dataToComment);
    setSubmitting(false);
    val = '';
    comment();
  };

  const handleChange = e => {
    val = e.target.value;
  };

  const CommentList = () => (
    <List
      dataSource={comments}
      header={`${comments.length} bình luận`}
      itemLayout="horizontal"
      renderItem={p => <Comment {...p} />}
    />
  );

  const Editor = ({ onChange, onSubmit, submitting }) => (
    <div>
      <Form>
        <Form.Item>
          <Input.TextArea rows={4} onChange={onChange} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
            Bình luận
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  return (
    <div className="contractInfo">
      <p>Dành những lời tốt đẹp cho nhau bạn nhé ! </p>
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src={user.avatar} alt={user.name} />}
          content={
            <Editor onChange={handleChange} onSubmit={handleSubmit} submitting={isSubmitting} />
          }
        />
      </div>
    </div>
  );
};

export default CommentNe;
