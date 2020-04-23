export const START_LOADING = "START_LOADING"
export const STOP_LOADING = "STOP_LOADING"
export const SET_ERROR = "SET_ERROR"
export const CLEAR_ERROR = "CLEAR_ERROR"

const defaultState = {
  loading: false,
  error: false,
  errorMessage: ''
}

export default (state = defaultState, action ) => {
  switch(action.type){
    case START_LOADING:
      return {...state, loading: true}
    case STOP_LOADING:
        return {...state, loading: false}  
    case SET_ERROR:
        return {...state, error: true, errorMessage: action.error} 
   case CLEAR_ERROR:
        return {...state, error: false, errorMessage: ''}            
    default:
      return state
  }
}