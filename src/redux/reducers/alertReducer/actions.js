export const SHOW_ALERT = "ALERT/SHOW_ALERT"
export const HIDE_ALERT = "ALERT/HIDE_ALERT"

export const alertActionCreators = {
  show(text, type = 'warning') {
    return {
      type: SHOW_ALERT,
      payload: {text, type}
    }
  },
  hide() {
    return {
      type: HIDE_ALERT,
    };
  }
}
