import React, { useCallback } from 'react';
import { VisibilityFilter } from '../models/visibilityFilter/types';
import {
  useSetVisibilityFilter,
  useVisibilityFilter,
} from '../models/visibilityFilter/use';
import Link from '../components/Link';

type Props = {
  filter: VisibilityFilter;
};

const FilterLink: React.FC<Props> = ({ filter, children }) => {
  const setVisibilityFilter = useSetVisibilityFilter();
  const activeFilter = useVisibilityFilter();

  const handleClick = useCallback(() => {
    setVisibilityFilter(filter);
  }, []);

  const isActive = activeFilter === filter;

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link active={isActive} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default FilterLink;
