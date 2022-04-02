import React, { useCallback, useState } from 'react';
import { useAddTodo } from '../models/todos/use';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const addTodo = useAddTodo();

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!value.trim()) {
        return;
      }
      addTodo(value);
      setValue('');
    },
    [value],
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
