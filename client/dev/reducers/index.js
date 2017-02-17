import { combineReducers } from 'redux';
import mapAspectFilterReducer from './mapAspectFilterReducer.js'

const rootReducer = combineReducers({
  filteredPoints: mapAspectFilterReducer
})

export default rootReducer