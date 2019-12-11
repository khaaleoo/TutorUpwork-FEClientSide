import fetch from 'cross-fetch';
// eslint-disable-next-line import/prefer-default-export
export const uploadImage = (file, token) => {
  const url = 'http://localhost:3000/upload';
  console.log(`token`, token);
  const options = {
    method: 'POST',
    body: JSON.stringify({ file }),
    headers: {
      secret_token: token,
      'Content-Type': 'text/plain',
    },
  };
  return fetch(url, options).then(res => {
    console.log(res);
    return res.json();
  });
};
