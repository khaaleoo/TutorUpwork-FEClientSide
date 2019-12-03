import { connect } from 'react-redux';
import register from '../../components/register';

const mapStateToProps = state => {
  return {
    isRegisterSucceed: state.isRegisterSucceed,
  };
};

const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(register);
