import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@components/App';
import StoreProviderTodos from '@contexts/todosContext';

const container = document.getElementById('root');

const root = createRoot(container as unknown as Element);

root.render(
  <StoreProviderTodos>
    <App />
  </StoreProviderTodos>,
);
