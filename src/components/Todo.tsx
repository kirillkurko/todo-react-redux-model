/* eslint-disable  */
import React from 'react';

type Props = {
  onClick: () => void;
  completed: boolean;
  text: string;
};

const Todo: React.FC<Props> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

export default Todo;
