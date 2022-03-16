import {CREATE_PRODUCT,ADD_TO_CART,DELETE_PRODUCT,} from './actionTypes';
  
  export function createProduct(payload) {
    return {
      type: CREATE_PRODUCT,
      payload
    };
  };
  
  export function addToCartProduct(payload) {
    return {
      type: ADD_TO_CART,
      payload
    };
  };
  
  export function deleteItemCartProduct(payload) {
    return {
      type: DELETE_PRODUCT,
      payload
    };
  };