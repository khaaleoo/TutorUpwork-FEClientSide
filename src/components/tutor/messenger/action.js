import fetch from 'cross-fetch';
import API from '../../../service/API';
// eslint-disable-next-line import/prefer-default-export
export const getMessages = token => {
  const options = {
    method: 'GET',
    headers: {
      secret_token: token,
    },
  };
  return fetch(API.GET_MESS, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
