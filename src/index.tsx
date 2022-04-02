import React from 'react';
import { render } from 'react-dom';
import App from '@components/App';
import StoreProviderTodos from '@contexts/todosContext';

render(
  <StoreProviderTodos>
    <App />
  </StoreProviderTodos>,
  document.getElementById('root'),
);
