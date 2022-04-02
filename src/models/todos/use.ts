import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { State } from './reducer';

type RootState = {
  todosState: State;
};

export function useToggleTodo() {
  const dispatch = useDispatch();

  return (id: string) => {
    dispatch(actions.toggleTodo(id));
  };
}

export function useAddTodo() {
  const dispatch = useDispatch();

  return (text: string) => {
    dispatch(actions.addTodo(text));
  };
}

export function useTodos() {
  return useSelector((rootState: RootState) => rootState.todosState.todos);
}
