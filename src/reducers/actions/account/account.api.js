import fetch from 'cross-fetch';
import Swal from 'sweetalert2';
import API from '../../../service/API';

export const loginRequest = (email, password, cb) => () => {
  return fetch(API.LOGIN, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      console.log(res);
      if (res.status === 'OK') {
        Swal.fire('Thông báo', 'Thành công', 'success');
        cb(false, res.token, res.user);
      } else {
        Swal.fire('Thông báo', res.message, 'error');
        cb(res.message);
      }
    })
    .catch(error => {
      Swal.fire('Thông báo', error.message, 'error');
      cb(error.message);
    });
};

export const registerRequest = (email, password, role, cb) => dispatch => {
  return fetch(API.REGISTER, {
    method: 'POST',
    body: JSON.stringify({ email, password, role }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.status === 'OK') {
        dispatch({ type: 'REGISTER_SUCCEED' });
        Swal.fire('Thông báo', 'Thành công', 'success');
        cb(true);
      } else {
        Swal.fire('Thông báo', 'Tên đăng nhập đã tồn tại hoặc email chưa đúng', 'error');
        cb(false);
      }
    })
    .catch(error => {
      console.log(error);
      Swal.fire('Thông báo', 'Đã xảy ra lỗi', 'error');
      cb(false);
    });
};

export const authFace = (profile, done) => async () => {
  return fetch(API.AUTHFACE, {
    method: 'POST',
    body: JSON.stringify({ profile }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.status === 'OK') {
        Swal.fire('Thông báo', 'Thành công', 'success');
        done(false, res.token, res.user);
      } else {
        Swal.fire('Thông báo', res.message, 'error');
        done(res.message);
      }
    })
    .catch(error => {
      Swal.fire('Thông báo', error.message, 'error');
      done(error);
    });
};
export const authGg = (profile, done) => async () => {
  return fetch(API.AUTHGG, {
    method: 'POST',
    body: JSON.stringify({ profile }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.status === 'OK') {
        Swal.fire('Thông báo', 'Thành công', 'success');
        done(false, res.token, res.user);
      } else {
        Swal.fire('Thông báo', res.message, 'error');
        done(res.message);
      }
    })
    .catch(error => {
      Swal.fire('Thông báo', error.message, 'error');
      done(error);
    });
};
