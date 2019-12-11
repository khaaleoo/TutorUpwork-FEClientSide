/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Upload, Icon, message, Avatar } from 'antd';
import PropTypes from 'prop-types';
import './index.css';
import { uploadImage } from './actions';

function beforeUpload(file) {
  const isJpgOrPng = file.type.indexOf('image') === 0;
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

// eslint-disable-next-line import/prefer-default-export
export const AvatarUploader = props => {
  const { src, token } = props;
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const { style, size } = props;
  const buttonStyle = {
    width: size,
    height: size,
    ...style,
  };
  const uploadButton = (
    <div className="container" style={buttonStyle}>
      {loading || src === 'loading' ? (
        <Avatar
          src="/img/loading.gif"
          className="image"
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <Avatar
          src={imageUrl || src || '/img/user.png'}
          className="image"
          style={{ width: '100%', height: '100%' }}
        />
      )}
      <div className="middle">
        <Icon type="plus" width="1em" className="text" style={{ fontSize: size / 3 }} />
      </div>
    </div>
  );
  return (
    <Upload
      name="avatar"
      className="avatar-uploader"
      showUploadList={false}
      customRequest={options => {
        const reader = new FileReader();
        setLoading(true);
        console.log('sfdghfgbnmhnvbgnhm');
        reader.onloadend = () => {
          uploadImage(reader.result, token).then(() => {
            setImageUrl(reader.result);
            options.onSuccess();
          });
        };
        reader.readAsDataURL(options.file);
      }}
      beforeUpload={beforeUpload}
      onError={error => {
        console.log(`Upload error: ${error}`);
      }}
      onSuccess={() => {
        setLoading(false);
      }}
      accept="image/*"
    >
      {uploadButton}
    </Upload>
  );
};

AvatarUploader.propTypes = {
  size: PropTypes.number,
};
AvatarUploader.defaultProps = {
  size: 100,
};
