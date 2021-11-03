export const createStore = (reducer, initialState) => {
  let updater = () => {}
  let state = initialState
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    updater()
  }
  const suscribe = (listener) => {
    updater = listener
  }

  return {
    getState,
    dispatch,
    suscribe,
  }
}