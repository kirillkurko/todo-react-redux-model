import React from 'react';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import todosReducer from '@models/todos/reducer';
import visibilityFiltersReducer from '@models/visibilityFilter/reducer';

const store = createStore(
  combineReducers({
    todosState: todosReducer,
    filtersState: visibilityFiltersReducer,
  }),
  composeWithDevTools(),
);

const StoreProviderTodos: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProviderTodos;
