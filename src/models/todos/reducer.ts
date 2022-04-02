import { Todo } from '../../types/todo';
import { VisibilityFilter, ActionType } from './types';
import ActionBase from '../../types/actionBase';

export type State = {
  todos: Todo[];
  visibilityFilter: VisibilityFilter;
};

const initialState: State = {
  todos: [],
  visibilityFilter: VisibilityFilter.All,
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
