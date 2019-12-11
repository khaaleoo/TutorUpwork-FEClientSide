import URL from './URL';

const API = {
  LOGIN: `${URL}/login`,
  REGISTER: `${URL}/register`,
  AUTHFACE: `${URL}/facebook`,
  AUTHGG: `${URL}/google`,
  LOAD_SPECIAL_TUTOR_LIST: `${URL}/tutor/special`,
  LOAD_ONE_TUTOR: `${URL}/tutor/:id`,
  LOAD_ALL_TUTOR: `${URL}/tutor/all`,
  LOAD_TUTOR_BY_FILTER: `${URL}/tutor/filter`,
  LOAD_ALL_SKILLS: `${URL}/skill/all`,
};

export default API;
