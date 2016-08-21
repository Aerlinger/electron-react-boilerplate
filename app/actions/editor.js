export function evaluate() {
  return (dispatch, getState) => {
    const state = getState()

    dispatch({
      type: "EVALUATE",
      code: state.counter
    })
  }
}

export function getDoc() {
  return (dispatch, getState) => {
    const state = getState()

    dispatch({
      type: "GET_DOCS"
    })
  }
}

export function getVariables() {
  return (dispatch, getState) => {
    const state = getState()

    dispatch({
      type: "GET_VARIABLES"
    })
  }
}

