import {
    CREATE_PRODUCT,
    ADD_TO_CART,
    DELETE_PRODUCT,
  } from './actionTypes';
  import _, { filter, find, isEqual, remove } from 'lodash';
  
  const initialState = {
    products: [],
    itemCart:[],
    isLoading: false,
  };
  
  function listProductReducer(state = initialState, action) {
    let _state = {...state};
    switch(action.type) {
      case CREATE_PRODUCT:
        _state = {
          ...state,
          products: [..._state.products, action.payload]
        };
        break;
      case ADD_TO_CART:
        _state = {
          ...state,
          itemCart: [..._state.itemCart, action.payload]
        };
        break;      
      case DELETE_PRODUCT:
        
        break;
      default:
        _state = state;
    };
    return _state;
  };
  
  export default listProductReducer;