import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

let reduxStore = null;
const proc = process as any;
const sagaMiddleware = createSagaMiddleware();

function create(initialState) {
  const middlewares = [
    sagaMiddleware
  ];

  const store: any = createStore(
    combineReducers({...reducers}),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export function initRedux(initialState = {}) {
  if (!proc.browser) {
    return create(initialState);
  }

  // Reuse store on the client-side
  if (!reduxStore) {
    reduxStore = create(initialState);
  }

  return reduxStore;
}
