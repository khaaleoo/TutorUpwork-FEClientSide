import { connect } from 'react-redux';
import { loadSpecialTutor } from '../../reducers/actions';
import home from './home.component';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadSpecialTutor: cb => dispatch(loadSpecialTutor(cb)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(home);
