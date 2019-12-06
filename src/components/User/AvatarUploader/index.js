import React, { useState } from 'react';
import { Upload, Icon, message, Avatar } from 'antd';
import './index.css';
import PropTypes from 'prop-types';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
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
  const { getURL } = props;
  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, Url => {
        getURL(Url);
        setImageUrl(Url);
        setLoading(false);
      });
    }
  };
  const { size } = props;
  const style = {
    width: size,
    height: size,
  };
  const uploadButton = (
    <div className="container" style={style}>
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
        <Icon type="plus" width="1em" className="text" style={{ fontSize: size / 2 }} />
      </div>
    </div>
  );
  const { action } = props;
  return (
    <Upload
      name="avatar"
      className="avatar-uploader"
      showUploadList={false}
      action={action}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      accept="image/*"
    >
      {uploadButton}
    </Upload>
  );
};

AvatarUploader.propTypes = {
  action: PropTypes.string,
  size: PropTypes.number,
  getURL: PropTypes.func,
};
AvatarUploader.defaultProps = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  size: 100,
  getURL: () => {},
};
