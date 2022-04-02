import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { VisibilityFilter } from './types';
import { State } from './reducer';

export function useToggleTodo() {
  const dispatch = useDispatch();

  return (id: number) => {
    dispatch(actions.toggleTodo(id));
  };
}

export function useAddTodo() {
  const dispatch = useDispatch();

  return (text: string) => {
    console.log(text, 'text');
    dispatch(actions.addTodo(text));
  };
}

export function useSetVisibilityFilter() {
  const dispatch = useDispatch();

  return (filter: VisibilityFilter) => {
    dispatch(actions.setVisibilityFilter(filter));
  };
}

export function useVisibilityFilter() {
  return useSelector((rootState: State) => rootState.visibilityFilter);
}

export function useTodos() {
  return useSelector((rootState: State) => rootState.todos);
}
