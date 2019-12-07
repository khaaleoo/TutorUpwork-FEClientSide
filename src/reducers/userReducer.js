// dữ liệu của user
export const userData = (state = '', action) => {
  switch (action.type) {
    case 'SAVE_USER_DATA': {
      return action.userData;
    }
    case 'LOG_OUT': {
      return '';
    }
    default:
      return state;
  }
};

// đăng ký thành công hay chưa ?
export const isRegisterSucceed = (state = false, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCEED': {
      return true;
    }
    default:
      return state;
  }
};
