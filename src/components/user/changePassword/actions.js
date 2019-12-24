import fetch from 'cross-fetch';
import Swal from 'sweetalert2';
import API from '../../../service/API';

// eslint-disable-next-line import/prefer-default-export
export const changePassword = (password, token) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ password }),
    headers: {
      secret_token: token,
      'Content-Type': 'text/plain',
    },
  };
  return fetch(API.USER.CHANGEPASS, options)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(e => Swal.fire('Error', e.message, 'error'));
};
