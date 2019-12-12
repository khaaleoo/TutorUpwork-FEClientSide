import fetch from 'cross-fetch';
import API from '../../service/API';
// eslint-disable-next-line import/prefer-default-export
export const verifyGoogle = id => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ id }),
    headers: { 'Content-Type': 'text/plain' },
  };
  return fetch(API.VERIFY, options)
    .then(res => res.json())
    .catch(err => console.log(err));
};
export const loginGg = body => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ ...body }),
    headers: { 'Content-Type': 'text/plain' },
  };
  return fetch(API.GOOGLE, options)
    .then(res => res.json())
    .catch(err => console.log(err));
};
