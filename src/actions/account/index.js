import fetch from 'cross-fetch';
import Swal from 'sweetalert2';
import API from '../../service/API';

export const saveUserData = data => ({
  type: 'SAVE_USER_DATA',
  userData: data,
});

export const loginRequest = (email, password, cb) => dispatch => {
  return fetch(API.LOGIN, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.status === 'OK') {
        dispatch(saveUserData(res));
      } else {
        Swal.fire('Thông báo', 'Tài khoản không đúng', 'error');
      }
    })
    .catch(error => {
      console.log(error);
      Swal.fire('Thông báo', 'Đã xảy ra lỗi', 'error');
    })
    .finally(() => {
      cb();
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
      } else {
        Swal.fire('Thông báo', 'Tên đăng nhập đã tồn tại hoặc email chưa đúng', 'error');
      }
    })
    .catch(error => {
      console.log(error);
      Swal.fire('Thông báo', 'Đã xảy ra lỗi', 'error');
    })
    .finally(() => {
      cb();
    });
};

export const authFace = profile => async run => {
  run(registerRequest(profile));
  run(loginRequest(profile.email, profile.password));
};
export const authGg = profile => async run => {
  run(registerRequest(profile));
  run(loginRequest(profile.email, profile.password));
};
