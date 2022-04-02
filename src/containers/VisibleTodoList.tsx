import React, { useMemo } from 'react';
import { VisibilityFilter } from '../models/todos/types';
import {
  useTodos,
  useVisibilityFilter,
  useToggleTodo,
} from '../models/todos/use';
import TodoList from '../components/TodoList';

const VisibleTodoList: React.FC = () => {
  const todos = useTodos();
  const visibilityFilter = useVisibilityFilter();
  const toggleTodo = useToggleTodo();

  console.log(todos);
  console.log(visibilityFilter);

  const visibleTodos = useMemo(() => {
    switch (visibilityFilter) {
      case VisibilityFilter.Completed:
        return todos.filter((todo) => todo.completed);
      case VisibilityFilter.Active:
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }, [todos, visibilityFilter]);

  return <TodoList todos={visibleTodos} toggleTodo={toggleTodo} />;
};

export default VisibleTodoList;
