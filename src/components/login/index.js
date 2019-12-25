import { connect } from 'react-redux';
import login from './login.component';
import { loginRequest } from '../../reducers/actions/account/account.api';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = run => {
  return {
    login: (email, password, cb) => run(loginRequest(email, password, cb)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(login);
