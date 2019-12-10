import React, { useState } from 'react';
import { Upload, Icon, message, Avatar } from 'antd';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import './index.css';

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

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
  const [imageUrl, setImageUrl] = useState('/img/user.png');
  const [loading, setLoading] = useState(false);
  const { style, size } = props;
  const buttonStyle = {
    width: size,
    height: size,
    ...style,
  };
  const uploadButton = (
    <div className="container" style={buttonStyle}>
      {loading ? (
        <Avatar
          src="/img/loading.gif"
          className="image"
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <Avatar src={imageUrl} className="image" style={{ width: '100%', height: '100%' }} />
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
        setLoading(false);
        reader.onloadend = () => {
          options.onSuccess(reader.result);
        };
        reader.readAsDataURL(options.file);
      }}
      beforeUpload={beforeUpload}
      onError={error => {
        console.log(`Upload error: ${error}`);
      }}
      onSuccess={body => {
        setLoading(false);
        setImageUrl(body);
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
