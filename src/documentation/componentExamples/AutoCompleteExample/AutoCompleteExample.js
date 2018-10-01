import React from 'react';
import AutoComplete from '../../../components/AutoComplete';
import { statesList } from './statesList';

export const AutoCompleteExample = () => (
  <AutoComplete 
    suggestions={statesList}
    name="state"
    label="State"
    placeholder="e.g., type 'new'"
  />
);
