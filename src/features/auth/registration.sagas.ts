import { takeLatest } from 'typed-redux-saga';
import { register } from './registration.slice';

export function* registerSaga() {
  yield takeLatest(register, function* ({ payload }) {
    console.log('registerSaga', payload);
  });
}
