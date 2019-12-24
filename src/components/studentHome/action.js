/* eslint-disable camelcase */
import fetch from 'cross-fetch';
import Swal from 'sweetalert2';
import API from '../../service/API';

export const endContract = (id, idTutor, cb) => {
  return fetch(API.END_CONTRACT, {
    method: 'POST',
    body: JSON.stringify({ id, idTutor }),
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
export const reportContract = (id, reportInfo, cb) => {
  return fetch(API.REPORT_CONTRACT, {
    method: 'POST',
    body: JSON.stringify({ id, reportInfo }),
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
export const changeStatus = (id, status, cb) => {
  return fetch(API.CHANGE_STT_CONTRACT, {
    method: 'POST',
    body: JSON.stringify({
      id,
      status,
    }),
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

export const payRequest = (vnp_Amount, vnp_BankCode, idContract, cb) => {
  console.log(idContract);
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
