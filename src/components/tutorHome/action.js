/* eslint-disable camelcase */
import fetch from 'cross-fetch';
import Swal from 'sweetalert2';
import API from '../../service/API';

export const changeStatus = (id, status, token, cb) => {
  return fetch(API.CHANGE_STT_CONTRACT, {
    method: 'POST',
    body: JSON.stringify({
      id,
      status,
    }),
    headers: {
      secret_token: token,
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.Status === 'OK') {
        cb(res);
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

export const getListComment = (id, cb) => {
  return fetch(API.GET_LIST_COMMENT.replace(':id', id), {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.Status === 'OK') {
        cb(res);
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

export const getListContractByTime = (id, beginTime, endTime, cb) => {
  return fetch(API.GET_LIST_CONTRACT_BY_TIME, {
    method: 'POST',
    body: JSON.stringify({ id, beginTime, endTime }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.Status === 'OK') {
        cb(res);
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
