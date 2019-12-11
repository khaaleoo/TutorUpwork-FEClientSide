import { connect } from 'react-redux';
import { loadOneTutor } from '../../reducers/actions';
import tutorDetail from './tutorHome.component';

const mapStateToProps = state => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTutorData: (email, cb) => dispatch(loadOneTutor(email, cb)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(tutorDetail);
