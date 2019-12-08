import { connect } from 'react-redux';
import { loadOneTutor } from '../../reducers/actions/home/home.api';
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
