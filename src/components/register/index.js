import { connect } from 'react-redux';
import register from './register.component';
import { registerRequest } from '../../reducers/actions/account/account.api';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = run => {
  const actions = {
    register: (email, password, role, cb) => run(registerRequest(email, password, role, cb)),
  };
  return actions;
};
export default connect(mapStateToProps, mapDispatchToProps)(register);
