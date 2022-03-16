import { INCREMENT, INCREMENT_SUCCESS, INCREMENT_FAIL } from "./constants";
const initialState = {
    numb:0,
    isLoading:false,
    errors : {},
};
 function reduxToturialReducer(state=initialState,action){
     let _state = {...state};
    switch(action.type){
        case INCREMENT:
            _state.numb +=1;
            _state.isLoading = true;
            break;
        case INCREMENT_SUCCESS:
            _state.numb = action.response;
            _state.isLoading = false;
            break;
        case INCREMENT_FAIL:
            _state.errors = action.errors;
            _state.isLoading = false;
    }
    return _state;
 }
export default reduxToturialReducer;