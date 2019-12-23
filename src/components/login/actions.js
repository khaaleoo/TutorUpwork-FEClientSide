/* eslint-disable import/prefer-default-export */
import fetch from 'cross-fetch';
import API from '../../service/API';
// eslint-disable-next-line import/prefer-default-export

export const RequestVerify = email => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'text/plain',
    },
  };
  return fetch(API.REQUEST_VERIFY, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
