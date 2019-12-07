/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Avatar, Comment, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const CommentNe = () => {
  let val = '';
  const [isSubmitting, setSubmitting] = useState(false);
  const [comments, setComments] = useState('');
  const handleSubmit = () => {
    if (!val) {
      return;
    }
    setSubmitting(true);

    console.log(val);
    setComments([
      {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: <p style={{ textAlign: 'left' }}>{val}</p>,
        datetime: moment().fromNow(),
      },
      ...comments,
    ]);
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
      renderItem={props => <Comment {...props} />}
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
