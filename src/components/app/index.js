import { connect } from 'react-redux';
import app from './app.component';

const mapStateToProps = state => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(app);
