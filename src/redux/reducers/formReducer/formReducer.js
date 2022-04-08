import { ADD_NOTE, ADD_NOTE_SUCCESS, FETCH_NOTES, REMOVE_NOTE, REMOVE_NOTE_SUCCESS, TOGGLE_NOTE, TOGGLE_NOTE_SUCCESS } from "./actions";

const initialState ={
  notes: [],
  loading: true,
  completed: false,
}

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_NOTE: {
    //   return {
    //     ...state,
    //     notes: [...state.notes, {loading: true}]
    //     loading: true,
    //   };
    // }
    case ADD_NOTE_SUCCESS: {
      return {
        ...state,
        notes: [...state.notes, action.payload],
        // loading: false,
      }
    }
    case FETCH_NOTES: {
      return {
        ...state,
        notes: [...state.notes, ...action.payload],
        loading: false
      };
    }
    // case REMOVE_NOTE: {
    //   return {
    //     ...state,
    //     loading: true
    //   };
    // }
    case REMOVE_NOTE_SUCCESS: {
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
        // loading: false
      };
    }
    case TOGGLE_NOTE: {
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.note.id) {
            return {...note, loading: true}
          }
          return note
        })
      };
    }
    case TOGGLE_NOTE_SUCCESS: {
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) {
            return action.payload
          }
          return note
        })
      };
    }
    // case TOGGLE_NOTE_FAILURE: {
    //   return {
    //     ...state,
    //     notes: state.notes.map(note => {
    //       if (note.id === action.payload.id) {
    //         return action.payload;
    //       }
    //       return note;
    //     })
    //   };
    // }
    default:
      return state
  }
}
