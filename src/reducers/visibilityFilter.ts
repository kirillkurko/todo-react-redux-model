import { VisibilityFilters, ActionType } from '../actions';

// TODO: no any
const visibilityFilter = (state = VisibilityFilters.ShowAll, action: any) => {
  switch (action.type) {
    case ActionType.SetVisibilityFilter:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
