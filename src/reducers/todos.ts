import { ActionType } from '../actions';
import { Todo } from '../types/todo';

// TODO: no any
const todos = (state = [], action: any) => {
  switch (action.type) {
    case ActionType.AddTodo:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case ActionType.ToggleTodo:
      return state.map((todo: Todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    default:
      return state;
  }
};

export default todos;
