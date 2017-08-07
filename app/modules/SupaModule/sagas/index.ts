import { all, takeEvery } from 'redux-saga/effects';
import { liveAdd } from '../actions';
import { live } from './liveSaga';

export default function *() {
  yield all([
    takeEvery(liveAdd().type, live)
  ]);
}
