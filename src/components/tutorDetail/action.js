/* eslint-disable camelcase */
import fetch from 'cross-fetch';
import Swal from 'sweetalert2';
import API from '../../service/API';

export const payRequest = (vnp_Amount, vnp_BankCode, idContract, cb) => {
  return fetch(API.PAY, {
    method: 'POST',
    body: JSON.stringify({ vnp_Amount, vnp_BankCode, idContract }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.code === '00') {
        window.location.replace(res.data);
        cb(res.data);
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

export const createContract = (param, cb) => {
  const {
    studentId,
    tutorId,
    beginTime,
    endTime,
    pricePerHour,
    totalHour,
    totalPrice,
    status,
    skill,
  } = param;
  return fetch(API.CREATE_NEW_CONTRACT, {
    method: 'POST',
    body: JSON.stringify({
      studentId,
      tutorId,
      beginTime,
      endTime,
      pricePerHour,
      totalHour,
      totalPrice,
      status,
      skill,
    }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.Status === 'OK') {
        cb(res.data);
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
