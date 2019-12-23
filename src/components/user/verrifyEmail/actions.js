/* eslint-disable import/prefer-default-export */
import fetch from 'cross-fetch';
import API from '../../../service/API';

export const verifyUser = (code, id) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ code, id }),
    headers: {
      'Content-Type': 'text/plain',
    },
  };
  return fetch(API.USER_VERIFY, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
