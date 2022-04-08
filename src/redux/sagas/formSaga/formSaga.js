import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { notesAPI } from "../../../api/api";
import { alertActionCreators } from "../../reducers/alertReducer/actions";
import { ADD_NOTE, formActionCreators, REMOVE_NOTE, TOGGLE_NOTE } from "../../reducers/formReducer/actions";

export function* fetchNotes() {
  const request = yield call(notesAPI.fetchNotes);

  const payload = Object.keys(request.data || {}).map(key => {
    return {
      ...request.data[key],
      id: key,
      loading: false
    };
  });

  yield put(formActionCreators.fetchNotes(payload));
}

export function* addNote({ payload }) {
  const newNote = {
    title: payload,
    date: new Date().toLocaleString(),
    completed: false
  };

  const request = yield call(
    notesAPI.addNote,
    newNote
    );

  const newPayload = {
    ...newNote,
    id: request.data.name,
    loading: false
  };

  yield put(formActionCreators.addNoteSuccess(newPayload));
}

export function* removeNote({id}) {
  yield call(
    notesAPI.removeNote,
    id
  )

  yield put(formActionCreators.removeNoteSuccess(id))
}

export function* toggleNote({note}) {
  try {
    const request = yield call(
      notesAPI.toggleNote,
      note
    );

    yield put(formActionCreators.toggleNoteSuccess(request.data))
  } catch (e) {
    yield put(formActionCreators.toggleNoteSuccess(note))
    yield put(alertActionCreators.show(e.message, 'danger'))
  }

}

export function* initializeSaga() {
  yield fork(fetchNotes);
}

export default function* formSaga() {
  yield all([
    takeEvery(ADD_NOTE, addNote),
    takeEvery(REMOVE_NOTE, removeNote),
    takeEvery(TOGGLE_NOTE, toggleNote)
  ]);
}
