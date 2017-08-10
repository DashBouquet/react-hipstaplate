import { createSelector } from 'utils/createSelector';
import { prop } from 'ramda';

const ModuleState = ({ Marvel }) => Marvel;

export const getSearch = createSelector(
  ModuleState,
  ({ search }) => ({ search })
);

export const getNavigation = createSelector(
  ModuleState,
  prop('navigation')
);

export const stateMapper = createSelector(
  ModuleState,
  ({ search, navigation }) => ({
    search,
    navigation
  })
);
