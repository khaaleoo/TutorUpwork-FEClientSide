import { connect } from 'react-redux';
import { loadOneStudent } from '../../reducers/actions';
import studentHome from './studentHome.component';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadStudentData: (id, cb) => dispatch(loadOneStudent(id, cb)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(studentHome);
