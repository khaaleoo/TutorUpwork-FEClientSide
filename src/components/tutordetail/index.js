import { connect } from 'react-redux';
import { loadOneTutor } from '../../reducers/actions';
import tutorDetail from './tutorDetail.component';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadTutorData: (email, cb) => dispatch(loadOneTutor(email, cb)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(tutorDetail);
