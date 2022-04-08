import { all, call, put, spawn } from "redux-saga/effects";
import { alertActionCreators } from "../reducers/alertReducer/actions";
import formSaga, { initializeSaga } from "./formSaga/formSaga";

export default function* rootSaga() {
  const sagas = [
    initializeSaga,
    formSaga,
  ];

  const retrySagas = yield sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break;
        } catch (e) {
          console.error(e.message);
          yield put(alertActionCreators.show(e.message, 'danger'))
        }
      }
    })
  })

  yield all(retrySagas)
}
