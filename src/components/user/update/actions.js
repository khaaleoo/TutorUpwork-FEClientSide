import fetch from 'cross-fetch';
// eslint-disable-next-line import/prefer-default-export
export const getMe = token => {
  const url = 'http://localhost:3000/me';
  const options = {
    method: 'GET',
    headers: {
      secret_token: token,
    },
  };
  return fetch(url, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
export const updateRequest = (token, body) => {
  const url = `http://localhost:3000/tutor`;
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      secret_token: token,
      'Content-Type': 'text/plain',
    },
  };
  return fetch(url, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
export const getAllSkill = token => {
  const url = `http://localhost:3000/skill`;
  const options = {
    method: 'GET',
    headers: {
      secret_token: token,
    },
  };
  return fetch(url, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
