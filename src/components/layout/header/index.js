import { connect } from 'react-redux';
import header from './header.component';

const mapStateToProps = state => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(header);
