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
    console.log(action);
    let _state = {...state};
    switch(action.type) {
      case CREATE_PRODUCT:
        _state = {
          ...state,
          products: [..._state.products, action.payload]
        };
        break;
      case ADD_TO_CART:
        let existing = _state.itemCart.find(item => item.id === action.payload.id);
        if (existing) {
          existing.quantity = existing.quantity + 1;
          _state = {
            ...state}
        } else {
          _state = {
            ...state,
            itemCart: [..._state.itemCart, action.payload]
          };
        }
        
        break;      
      case DELETE_PRODUCT:
        
        break;
      default:
        _state = state;
    };
    return _state;
  };
  
  export default listProductReducer;