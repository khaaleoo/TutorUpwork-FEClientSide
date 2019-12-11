import fetch from 'cross-fetch';
import API from '../../../service/API';
// eslint-disable-next-line import/prefer-default-export
export const uploadImage = (file, token) => {
  console.log(`token`, token);
  const options = {
    method: 'POST',
    body: JSON.stringify({ file }),
    headers: {
      secret_token: token,
      'Content-Type': 'text/plain',
    },
  };
  return fetch(API.UPLOAD_AVATAR, options).then(res => {
    console.log(res);
    return res.json();
  });
};
