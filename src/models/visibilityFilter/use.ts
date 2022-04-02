import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { VisibilityFilter } from './types';
import { State } from './reducer';

type RootState = {
  filtersState: State;
};

export function useSetVisibilityFilter() {
  const dispatch = useDispatch();

  return (filter: VisibilityFilter) => {
    dispatch(actions.setVisibilityFilter(filter));
  };
}

export function useVisibilityFilter() {
  return useSelector(
    (rootState: RootState) => rootState.filtersState.visibilityFilter,
  );
}
