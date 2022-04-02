let nextTodoId = 0;

export enum ActionType {
  AddTodo = 'ADD_TODO',
  SetVisibilityFilter = 'SET_VISIBILITY_FILTER',
  ToggleTodo = 'TOGGLE_TODO',
}

export const addTodo = (text: string) => ({
  type: ActionType.AddTodo,
  id: nextTodoId++,
  text,
});

// TODO: no any
export const setVisibilityFilter = (filter: any) => ({
  type: ActionType.SetVisibilityFilter,
  filter,
});

export const toggleTodo = (id: number) => ({
  type: ActionType.ToggleTodo,
  id,
});

export enum VisibilityFilters {
  ShowAll = 'SHOW_ALL',
  ShowCompleted = 'SHOW_COMPLETED',
  ShowActive = 'SHOW_ACTIVE',
}
