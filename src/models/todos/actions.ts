import { v4 as uuidv4 } from 'uuid';
import { ActionType } from './types';

export const addTodo = (text: string) => ({
  type: ActionType.AddTodo,
  id: uuidv4(),
  text,
});

export const toggleTodo = (id: string) => ({
  type: ActionType.ToggleTodo,
  id,
});
