import { ActionType, VisibilityFilter } from './types';

export const setVisibilityFilter = (filter: VisibilityFilter) => ({
  type: ActionType.SetVisibilityFilter,
  filter,
});
