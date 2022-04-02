import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilter } from '../models/visibilityFilter/types';

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilter.All}>All</FilterLink>
    <FilterLink filter={VisibilityFilter.Active}>Active</FilterLink>
    <FilterLink filter={VisibilityFilter.Completed}>Completed</FilterLink>
  </div>
);

export default Footer;
