import { combineReducers } from 'redux'
import products from './products'
import ui from './ui'

const rootReducer = combineReducers({
  products, 
  ui
})
export default rootReducer