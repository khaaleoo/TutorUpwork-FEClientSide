import fetch from 'cross-fetch';
import Swal from 'sweetalert2';
import API from '../../../service/API';

export const loadOneStudent = (id, cb) => () => {
  return fetch(API.LOAD_ONE_STUDENT.replace(':id', id), {
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
        Swal.fire('Thông báo', 'Lỗi', 'error');
      }
    })
    .catch(error => {
      Swal.fire('Thông báo', error.message, 'error');
    });
};

export const temp2 = () => {};
