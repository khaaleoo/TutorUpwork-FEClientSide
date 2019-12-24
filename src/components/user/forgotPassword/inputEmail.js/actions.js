import fetch from 'cross-fetch';
import API from '../../../../service/API';
// eslint-disable-next-line import/prefer-default-export
export const RecoverPassRequest = email => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'text/plain',
    },
  };
  console.log(API.USER.FORGOT_PASS);
  return fetch(API.USER.FORGOT_PASS, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
