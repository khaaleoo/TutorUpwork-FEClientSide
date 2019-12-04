import { connect } from 'react-redux';
import register from '../../components/register';
import { registerRequest } from '../../actions/account';

const mapStateToProps = state => {
  return {
    isRegisterSucceed: state.isRegisterSucceed,
  };
};

const mapDispatchToProps = run => {
  const actions = {
    register: (email, password, role, cb) => run(registerRequest(email, password, role, cb)),
  };
  return actions;
};
export default connect(mapStateToProps, mapDispatchToProps)(register);
