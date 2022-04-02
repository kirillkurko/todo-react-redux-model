import React from 'react';
import Todo from './Todo';
import { Todo as TodoType } from '../types/todo';

type Props = {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
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
