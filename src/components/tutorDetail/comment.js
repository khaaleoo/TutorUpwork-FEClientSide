/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Avatar, Comment, Form, Input, Button, List } from 'antd';
import moment from 'moment';

const comment = () => {
  const [val, setValue] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const [comments, setComments] = useState([]);

  const handleSubmit = () => {
    if (!val) {
      return;
    }
    setSubmitting(true);
    setValue('');
    setComments([
      {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: <p>{val}</p>,
        datetime: moment().fromNow(),
      },
      ...comments,
    ]);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const CommentList = () => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderItem={props => <Comment {...props} />}
    />
  );

  const Editor = () => (
    <div>
      <Form.Item>
        <Input.TextArea rows={4} onChange={handleChange} value={val} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={isSubmitting} onClick={handleSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );

  return (
    <div className="contractInfo">
      <div>
        {comments.length > 0 && <CommentList />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={<Editor />}
        />
      </div>

      {/* <Comment
        author="Trần Đình Khải"
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      /> */}
    </div>
  );
};

export default comment;
