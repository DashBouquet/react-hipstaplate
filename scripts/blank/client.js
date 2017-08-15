const _reducers = 'export default {}';
const _sagas = `import { all, call } from 'redux-saga/effects';

function * rootSaga() {
  yield all([]);
}

export default rootSaga;

`;

const _routes = `import * as nextRoutes from 'next-routes';
const routes = module.exports = nextRoutes();

`;

module.exports = [
  { path: './app/client/reducers.ts', content: _reducers, name: 'reducers.ts' },
  { path: './app/client/sagas.ts', content: _sagas, name: 'sagas.ts' },
  { path: './app/client/routes.ts', content: _routes, name: 'routes.ts' }
];
