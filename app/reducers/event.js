const initialState = {
  event: [],
  isLoading: false,
  isSaved: false,
  isError: false
}

const eventReducer = function(state=initialState, action){
  switch (action.type) {
    case "ALL_EVENT_PENDING":
      return {...state, isLoading: true}
    case "ALL_EVENT_FULFILLED":
      return {...state, event: action.payload.data, isLoading: false}
    case "CREATE_EVENT_FULFILLED":
      return {...state, isSaved: true}
    case "CREATE_EVENT_REJECTED":
      return {...state, isError: true}
    default:
      return state
  }
}

export default eventReducer
