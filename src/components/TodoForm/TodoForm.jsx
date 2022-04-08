import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { alertActionCreators, SHOW_ALERT } from "../../redux/reducers/alertReducer/actions";
import { ADD_NOTE, formActionCreators } from "../../redux/reducers/formReducer/actions";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(formActionCreators.addNote(inputValue));
      setInputValue('');
    } else {
      dispatch(alertActionCreators.show("Введите название заметки"))
    }
  };

  return (<form onSubmit={submitHandler}>
    <div className="input-group mb-3">
      <input className="form-control" type="text" placeholder="Введите название заметки" value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="submit">Отправить</button>
      </div>
    </div>
  </form>);
};
