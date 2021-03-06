import ActionBase from '@app-types/actionBase';
import { VisibilityFilter, ActionType } from './types';

export type State = {
  visibilityFilter: VisibilityFilter;
};

const initialState: State = {
  visibilityFilter: VisibilityFilter.All,
};

const reducer = (state = initialState, action: ActionBase): State => {
  switch (action.type) {
    case ActionType.SetVisibilityFilter:
      return {
        ...state,
        visibilityFilter: action.filter,
      };

    default:
      return state;
  }
};

export default reducer;
