import React from 'react';
import AddTodo from '@containers/AddTodo';
import VisibleTodoList from '@containers/VisibleTodoList';
import Footer from './Footer';

const App = () => (
  <>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </>
);

export default App;
