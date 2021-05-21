import React from 'react';

import { List } from '../../../components/List';

export const ListExample = (): React.ReactElement => (
  <List
    title="List Items"
    data={[
      { name: 'List Item 1' },
      { name: 'List Item 2' },
      { name: 'List Item 3' },
      { name: 'List Item 4' },
      { name: 'List Item 5' }
    ]}
  />
);