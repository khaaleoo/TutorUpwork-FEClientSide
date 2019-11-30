// bấm login hay register gì đó thì phải đợi
export const isLoadingData = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return action.userData;
    }
    default:
      return state;
  }
};

// để tạm. khi nào có đủ 2 thì xoá cmn đi
export const temp = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
