import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../models/todos/reducer';

const store = createStore(reducer);

const StoreProviderTodos: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProviderTodos;
