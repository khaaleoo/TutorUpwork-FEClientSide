import fetch from 'cross-fetch';
import Swal from 'sweetalert2';
import API from '../../../service/API';

export const loadListSkill = cb => () => {
  return fetch(API.LOAD_ALL_SKILLS, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.status === 'OK') {
        cb(res.data);
      } else {
        Swal.fire('Thông báo', res.message, 'error');
      }
    })
    .catch(error => {
      Swal.fire('Thông báo', error.message, 'error');
    });
};

export const temp = cb => () => {
  return fetch(API.LOAD_SPECIAL_TUTOR_LIST, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'text/plain;charset=utf-8',
    // },
  })
    .then(response => response.json())
    .then(res => {
      if (res.status === 'OK') {
        cb(res.data);
      } else {
        Swal.fire('Thông báo', 'Có lỗi', 'error');
      }
    })
    .catch(error => {
      Swal.fire('Thông báo', error.message, 'error');
    });
};
