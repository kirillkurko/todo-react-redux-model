import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setVisibilityFilter, VisibilityFilters } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (
  state: { visibilityFilter: VisibilityFilters },
  ownProps: { filter: VisibilityFilters },
) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
  dispatch: Dispatch<any>,
  ownProps: { filter: VisibilityFilters },
) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Link);
