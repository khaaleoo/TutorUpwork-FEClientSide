import { BackendUrl } from './URL';

const API = {
  LOGIN: `${BackendUrl}/login`,
  REGISTER: `${BackendUrl}/register`,
  AUTHFACE: `${BackendUrl}/facebook`,
  AUTHGG: `${BackendUrl}/google`,
  LOAD_SPECIAL_TUTOR_LIST: `${BackendUrl}/tutor/special`,
  LOAD_ONE_TUTOR: `${BackendUrl}/tutor/:id`,
  LOAD_ALL_TUTOR: `${BackendUrl}/tutor/all`,
  LOAD_TUTOR_BY_FILTER: `${BackendUrl}/tutor/filter`,
  LOAD_ALL_SKILLS: `${BackendUrl}/skill/all`,
  UPLOAD_AVATAR: `${BackendUrl}/upload`,
  GET_INFO: `${BackendUrl}/me`,
  UPDATE_TUTOR_INFO: `${BackendUrl}/tutor`,
  GET_ALL_SKILL: `${BackendUrl}/skill`,
  VERIFY: `${BackendUrl}/verify`,
  FACEBOOK: `${BackendUrl}/facebook`,
  GOOGLE: `${BackendUrl}/google`,
  LOAD_ONE_STUDENT: `${BackendUrl}/student/:id`,
  PAY: `${BackendUrl}/pay/createPaymentUrl`,
  CREATE_NEW_CONTRACT: `${BackendUrl}/contract/new`,
  END_CONTRACT: `${BackendUrl}/contract/end`,
  REPORT_CONTRACT: `${BackendUrl}/contract/report`,
};

export default API;
