/* eslint-disable camelcase */
import fetch from 'cross-fetch';
import Swal from 'sweetalert2';
import API from '../../service/API';

export const registerRequest = (vnp_Amount, vnp_BankCode, cb) => () => {
  return fetch(API.PAY, {
    method: 'POST',
    body: JSON.stringify({ vnp_Amount, vnp_BankCode }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.status === 'OK') {
        cb(true);
      } else {
        Swal.fire('Thông báo', 'Lỗi', 'error');
        cb(false);
      }
    })
    .catch(() => {
      Swal.fire('Thông báo', 'Đã xảy ra lỗi', 'error');
      cb(false);
    });
};

export const temp3 = () => {};
