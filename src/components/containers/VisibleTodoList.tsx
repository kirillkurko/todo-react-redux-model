import React, { useMemo } from 'react';
import { VisibilityFilter } from '@models/visibilityFilter/types';
import { useTodos, useToggleTodo } from '@models/todos/use';
import { useVisibilityFilter } from '@models/visibilityFilter/use';
import TodoList from '@components/TodoList';

const VisibleTodoList: React.FC = () => {
  const todos = useTodos();
  const visibilityFilter = useVisibilityFilter();
  const toggleTodo = useToggleTodo();

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
