import ActionBase from '@app-types/actionBase';
import { Todo } from '@app-types/todo';
import { ActionType } from './types';

export type State = {
  todos: Todo[];
};

const initialState: State = {
  todos: [],
};

const reducer = (state = initialState, action: ActionBase): State => {
  switch (action.type) {
    case ActionType.AddTodo:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      };
    case ActionType.ToggleTodo:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };

    default:
      return state;
  }
};

export default reducer;
