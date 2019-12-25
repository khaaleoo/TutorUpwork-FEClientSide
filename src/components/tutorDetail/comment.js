/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Avatar, Comment, Form, Button, List, Input, Spin } from 'antd';
import dateFormat from 'dateformat';
import Swal from 'sweetalert2';
import { comment } from './action';

import './comment.css';

const CommentNe = props => {
  const { user, tutor, comments, setComments, token } = props;

  if (comments) {
    comments.forEach((v, i) => {
      const d = Date.parse(v.datetime);
      if (!Number.isNaN(d)) comments[i].datetime = dateFormat(v.datetime, 'HH:MM dd/mm/yyyy');
      if (v.avatar === '') comments[i].avatar = '/img/user.png';
    });
  }
  const [isSubmitting, setSubmitting] = useState(false);
  const commentDone = res => {
    if (res) {
      const newE = res;
      if (!Number.isNaN(newE.datetime))
        newE.datetime = dateFormat(newE.datetime, 'HH:MM dd/mm/yyyy');
      const temp = [...comments, newE];

      setComments(temp);
    }
  };
  let val = '';
  const handleSubmit = () => {
    if (user.role !== 'student') {
      Swal.fire('Lỗi', 'Bạn không có quyền', 'error');
      return;
    }
    if (!val) {
      return;
    }
    console.log(user);
    setSubmitting(true);
    const dataToComment = {
      authorId: user.id,
      tutorId: tutor,
      content: val,
      datetime: Date.now(),
    };

    setSubmitting(false);
    val = '';
    comment(dataToComment, token, commentDone);
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
        {user ? (
          <Comment
            avatar={<Avatar src={user.avatar === '' ? '' : user.avatar} alt={user.name} />}
            content={
              <Editor onChange={handleChange} onSubmit={handleSubmit} submitting={isSubmitting} />
            }
          />
        ) : (
          <p> Bạn cần đăng nhập để thực hiện chức năng này</p>
        )}
      </div>
    </div>
  );
};

export default CommentNe;
