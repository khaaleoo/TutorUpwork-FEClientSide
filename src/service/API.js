import URL from './URL';

const API = {
  LOGIN: `${URL}/login`,
  REGISTER: `${URL}/register`,
  AUTHFACE: `${URL}/facebook`,
  AUTHGG: `${URL}/google`,
  LOAD_SPECIAL_TUTOR_LIST: `${URL}/home/special`,
  LOAD_ONE_TUTOR: `${URL}/home/:email`,
  LOAD_ALL_TUTOR: `${URL}/home/all`,
};

export default API;
