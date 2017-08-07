import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

let reduxStore = null;
const proc = process as any;
const sagaMiddleware = createSagaMiddleware();

function create(apollo, initialState) {
  const middlewares = [
    sagaMiddleware,
    apollo.middleware()
  ];

  const store: any = createStore(
    combineReducers({
      ...reducers,
      apollo: apollo.reducer()
    }),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export function initRedux(apollo, initialState = {}) {
  if (!proc.browser) {
    return create(apollo, initialState);
  }

  // Reuse store on the client-side
  if (!reduxStore) {
    reduxStore = create(apollo, initialState);
  }

  return reduxStore;
}
