import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleTodo, VisibilityFilters } from '../actions';
import TodoList from '../components/TodoList';
import { Todo } from '../types/todo';

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilters) => {
  switch (filter) {
    case VisibilityFilters.ShowAll:
      return todos;
    case VisibilityFilters.ShowCompleted:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.ShowActive:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = (state: {
  todos: Todo[];
  visibilityFilter: VisibilityFilters;
}) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
