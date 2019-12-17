import fetch from 'cross-fetch';
import API from '../../../service/API';
// eslint-disable-next-line import/prefer-default-export
export const getMe = token => {
  const options = {
    method: 'GET',
    headers: {
      secret_token: token,
    },
  };
  return fetch(API.GET_INFO, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
export const updateRequest = (token, body) => {
  console.log(JSON.stringify(body));
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      secret_token: token,
      'Content-Type': 'text/plain',
    },
  };
  return fetch(API.UPDATE_TUTOR_INFO, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
export const getAllSkill = token => {
  const options = {
    method: 'GET',
    headers: {
      secret_token: token,
    },
  };
  return fetch(API.GET_ALL_SKILL, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
