export const REMOVE_NOTE = "FORM/REMOVE_NOTE";
export const REMOVE_NOTE_SUCCESS = "FORM/REMOVE_NOTE_SUCCESS";

export const ADD_NOTE = "FORM/ADD_NOTE";
export const ADD_NOTE_SUCCESS = "FORM/ADD_NOTE_SUCCESS";

export const FETCH_NOTES = "FORM/FETCH_NOTES";

export const TOGGLE_NOTE = "FORM/TOGGLE_NOTE";
export const TOGGLE_NOTE_SUCCESS = "FORM/TOGGLE_NOTE_SUCCESS";


export const formActionCreators = {
  fetchNotes(payload) {
    return {
      type: FETCH_NOTES,
      payload
    };
  },
  addNote(payload) {
    return {
      type: ADD_NOTE,
      payload
    };
  },
  addNoteSuccess(payload) {
    return {
      type: ADD_NOTE_SUCCESS,
      payload
    };
  },
  removeNote(id) {
    return {
      type: REMOVE_NOTE,
      id
    };
  },
  removeNoteSuccess(payload) {
    return {
      type: REMOVE_NOTE_SUCCESS,
      payload
    };
  },
  toggleNoteSuccess(payload) {
    return {
      type: TOGGLE_NOTE_SUCCESS,
      payload
    }
  }
};
