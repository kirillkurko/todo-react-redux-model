import React from 'react';
import { Todo as TodoType } from '@app-types/todo';
import Todo from './Todo';

type Props = {
  todos: TodoType[];
  toggleTodo: (id: string) => void;
};

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(({ id, completed, text }) => (
      <Todo
        key={id}
        completed={completed}
        text={text}
        onClick={() => toggleTodo(id)}
      />
    ))}
  </ul>
);

export default TodoList;
