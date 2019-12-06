import { connect } from 'react-redux';
import login from './login.component';
import { loginRequest } from '../../reducers/actions/account';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = run => {
  return {
    login: (email, password, cb) => run(loginRequest(email, password, cb)),
    loginDone: user => run({ type: 'SAVE_USER_DATA', userData: user }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(login);
