import { all, call } from 'redux-saga/effects';
import SupaModuleSaga from 'modules/SupaModule/sagas';

function * rootSaga() {
  yield all([
    call(SupaModuleSaga)
  ]);
}

export default rootSaga;
