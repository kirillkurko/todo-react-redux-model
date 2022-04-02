import { ActionType } from './types';

let nextTodoId = 0;

export const addTodo = (text: string) => ({
  type: ActionType.AddTodo,
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id: number) => ({
  type: ActionType.ToggleTodo,
  id,
});
