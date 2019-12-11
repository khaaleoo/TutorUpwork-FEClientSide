import { connect } from 'react-redux';
import tutorlist from './tutorlist.component';
import { loadListTutor, loadListSkill, loadListByFilter } from '../../reducers/actions';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadListTutor: cb => dispatch(loadListTutor(cb)),
    loadListSkill: cb => dispatch(loadListSkill(cb)),
    loadListByFilter: (filter, cb) => dispatch(loadListByFilter(filter, cb)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(tutorlist);
