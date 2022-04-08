import { useDispatch, useSelector } from "react-redux";
import { alertActionCreators, HIDE_ALERT } from "../../redux/reducers/alertReducer/actions";
import { selectAlert } from "../../redux/reducers/alertReducer/selectors";

export const AlertComponent = () => {
  const alert = useSelector(selectAlert)

  const dispatch = useDispatch()

  const hide = () => {
    // dispatch({
    //   type: HIDE_ALERT
    // })
    dispatch(alertActionCreators.hide())
  }

  return (<>
    {alert.visible
    ? <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Внимание! </strong> {alert.text}
      <button type="button" onClick={hide} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    : undefined}
  </>

  );
};
