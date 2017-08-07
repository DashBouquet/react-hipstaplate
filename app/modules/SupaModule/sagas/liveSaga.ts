import { put, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { addItem } from '../actions';

export
function * live() {
  const Polling = yield call(handleIntervalAdd, 30);

  try {
    while (true) {
      const Item = yield take(Polling);
      yield put(addItem(Item));
    }
  } catch (e) {
    console.log(e);
  }
}

function handleIntervalAdd(waitTime) {
  return eventChannel(emit => {
    setInterval(() => {
      emit(`New item generated: ${Math.random()}`);
    }, waitTime * 1000);

    return () => ({});
  });
}
