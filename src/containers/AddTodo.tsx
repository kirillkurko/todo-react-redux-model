import React, { useCallback, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    dispatch(addTodo(value));
    setValue('');
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
