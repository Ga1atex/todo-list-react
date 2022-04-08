import { HIDE_ALERT, SHOW_ALERT } from "./actions";

const initialState = {
  visible: false,
  text: 'Что-то пошло не так',
  type: 'warning'
};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        visible: true,
        ...action.payload
      };
    case HIDE_ALERT:
      return {
        visible: false
      };
    default:
      return state;
  }
};
