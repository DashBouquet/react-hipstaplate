import { createSelector } from 'utils/createSelector';

const ModuleState = ({ SupaModule }) => SupaModule;

export const getListOfItems = createSelector(
  ModuleState,
  ({ list }) => ({ list })
);
