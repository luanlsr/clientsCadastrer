import { createStore, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer'
import {composeWithDevtools} from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  composeWithDevtools(
    applyMiddleWare(thunk)
  )
)

  export default store