import { connect } from 'react-redux';
import tutorlist from './tutorlist.component';
import { loadListTutor } from '../../reducers/actions/home';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadListTutor: cb => dispatch(loadListTutor(cb)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(tutorlist);
