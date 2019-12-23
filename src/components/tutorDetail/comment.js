/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Avatar, Comment, Form, Button, List, Input, Spin } from 'antd';
import dateFormat from 'dateformat';
import { comment, getListComment } from './action';

import './comment.css';

const CommentNe = props => {
  let val = '';

  const { user, tutor } = props;
  const [comments, setComments] = useState(false);
  const done = res => {
    console.log(res);
    setComments(res.result);
  };
  useEffect(() => {
    console.log(tutor);
    getListComment(tutor, done);
  }, []);

  if (comments) {
    comments.forEach((v, i) => {
      const d = Date.parse(v.datetime);
      if (!Number.isNaN(d)) comments[i].datetime = dateFormat(v.datetime, 'HH:MM dd/mm/yyyy');
      if (v.avatar === '') comments[i].avatar = '/img/user.png';
    });
  }
  const [isSubmitting, setSubmitting] = useState(false);
  const commentDone = res => {
    const newE = res;
    if (!Number.isNaN(newE.datetime)) newE.datetime = dateFormat(newE.datetime, 'HH:MM dd/mm/yyyy');
    const temp = [...comments, newE];

    setComments(temp);
  };
  const handleSubmit = () => {
    if (!val) {
      return;
    }

    setSubmitting(true);

    const dataToComment = {
      authorId: '1575947643027',
      tutorId: tutor,
      content: val,
      datetime: Date.now(),
    };

    setSubmitting(false);
    val = '';
    comment(dataToComment, commentDone);
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
        {comments ? '' : <Spin size="large" />}
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
