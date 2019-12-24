import fetch from 'cross-fetch';
import API from '../../../../service/API';
// eslint-disable-next-line import/prefer-default-export
export const RecoverPassCode = (code, email) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ code, email }),
    headers: {
      'Content-Type': 'text/plain',
    },
  };
  return fetch(API.USER.FORGOT_CODE, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => console.log(e));
};
