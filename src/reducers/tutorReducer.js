// tutor hiện tai
export const currentTutor = (state = '', action) => {
  switch (action.type) {
    case 'LOAD_TUTOR_DETAIL': {
      return action.tutorDetail;
    }

    default:
      return state;
  }
};

// danh sách tutor
export const tutorList = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TUTOR_LIST': {
      return action.tutorList;
    }
    default:
      return state;
  }
};

// danh sách tutor tiêu biểu
export const specialTutorList = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_SPECIAL_TUTOR_LIST': {
      return action.tutorList;
    }
    default:
      return state;
  }
};
