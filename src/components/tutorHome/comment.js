/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Comment, List, Spin } from 'antd';
import dateFormat from 'dateformat';
import './comment.css';

const CommentNe = props => {
  const { comments } = props;

  if (comments) {
    comments.forEach((v, i) => {
      const d = Date.parse(v.datetime);
      if (!Number.isNaN(d)) comments[i].datetime = dateFormat(v.datetime, 'HH:MM dd/mm/yyyy');
      if (v.avatar === '') comments[i].avatar = '/img/user.png';
    });
  }

  const CommentList = () => (
    <List
      dataSource={comments}
      header={`${comments.length} bình luận`}
      itemLayout="horizontal"
      renderItem={p => <Comment {...p} />}
    />
  );

  return (
    <div className="contractInfo">
      <div>
        {comments ? '' : <Spin size="large" />}
        {comments.length > 0 && <CommentList comments={comments} />}
      </div>
    </div>
  );
};

export default CommentNe;
