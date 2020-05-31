import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, searchActiveTag, searchRemovedTag, changeDurationFrom, changeDurationTo} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  searchActiveTag: tag => dispatch(searchActiveTag(tag)),
  searchRemovedTag: tag => dispatch(searchRemovedTag(tag)),
  changeDurationFrom: (type, value)=> dispatch(changeDurationFrom({
    type: type,
    value: value,
  })),
  changeDurationTo: (type, value)=> dispatch(changeDurationTo({
    type: type,
    value: value,
  })),

  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
