import { combineReducers } from 'redux';

import listProductReducer from '../../pages/ListProducts/reducer';

import caculatorNumberReducer from '../../components/ThucHanh/CaculatorNum/reducer';

const rootReducer = combineReducers({
  listProductReducer,
  caculatorNumberReducer
});

export default rootReducer;