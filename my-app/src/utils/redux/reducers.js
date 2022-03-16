import { combineReducers } from 'redux';

import listProductReducer from '../../pages/ListProducts/reducer';

const rootReducer = combineReducers({
  listProductReducer,
});

export default rootReducer;