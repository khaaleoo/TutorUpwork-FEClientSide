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

export default userData;
