import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer/alertReducer";
import { formReducer } from "./formReducer/formReducer";


const rootReducer = combineReducers({
  form: formReducer,
  alert: alertReducer
})

export default rootReducer;
