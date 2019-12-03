import fetch from 'cross-fetch';
import Swal from 'sweetalert2';
import API from '../../service/API';

export const saveUserData = data => ({
  type: 'SAVE_USER_DATA',
  userData: data,
});

export const loginRequest = (Email, Password) => dispatch => {
  return fetch(API.LOGIN, {
    method: 'POST',
    body: JSON.stringify({ Email, Password }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.status === 200) {
        dispatch(saveUserData(res));
      } else {
        Swal.fire('Thông báo', 'Sai thông tin', 'error');
      }
    })
    .catch(error => {
      throw error;
    });
};

export const registerRequest = () => dispatch => {
  return fetch(API.REGISTER, {
    method: 'POST',
    body: null,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  })
    .then(response => response.json())
    .then(res => {
      if (res.statusCode === 200) {
        Swal.fire('Thông báo', 'Thành công', 'success');
        dispatch({ type: 'REGISTER_SUCCEED' });
      } else {
        Swal.fire('Thông báo', 'Không thành công', 'error');
      }
    })
    .catch(error => {
      throw error;
    });
};
