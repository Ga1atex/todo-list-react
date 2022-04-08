import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertActionCreators, SHOW_ALERT } from "../../redux/reducers/alertReducer/actions";
import { formActionCreators, REMOVE_NOTE, TOGGLE_NOTE } from "../../redux/reducers/formReducer/actions";
import { selectLoading, selectNotes } from "../../redux/reducers/formReducer/selectors";
import { Loader } from "../Loader/Loader";


export const TodoList = () => {
  const loading = useSelector(selectLoading)
  const notes = useSelector(selectNotes)
  const dispatch = useDispatch()

  const removeNote = (id) => {
    dispatch(formActionCreators.removeNote(id))
    dispatch(alertActionCreators.show("Запись была успешно удалена", "success"))
  }

  const onCheck = (note) => {
    dispatch({ type: TOGGLE_NOTE, note });
  }

    return (
      <ul className="list-group pt-4">
        {
        loading
        ? <Loader />
        : notes.map(note => {
          return (<li className="list-group-item" key={note.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <label className={note.completed ? "text-decoration-line-through" : undefined}>
              <input type="checkbox" checked={note.completed} onChange={() => onCheck(note)} disabled={note.loading}/>
              <strong className="px-3">{note.title}</strong>
              <small>{note.date}</small>
            </label>
            <button type="button" className="btn btn-danger" onClick={() => { removeNote(note.id)}}>Удалить</button>
          </li>)
        })}
    </ul>
    )
}
