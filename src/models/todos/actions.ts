import { ActionType, VisibilityFilter } from './types';

let nextTodoId = 0;

export const addTodo = (text: string) => ({
  type: ActionType.AddTodo,
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter: VisibilityFilter) => ({
  type: ActionType.SetVisibilityFilter,
  filter,
});

export const toggleTodo = (id: number) => ({
  type: ActionType.ToggleTodo,
  id,
});
