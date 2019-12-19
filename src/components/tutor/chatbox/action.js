import fetch from 'cross-fetch';
import API from '../../../service/API';
// eslint-disable-next-line import/prefer-default-export
export const getMessages = (token, per1, per2) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ per1, per2 }),
    headers: {
      secret_token: token,
    },
  };
  return fetch(API.GET_ONE_CONVER, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
