import {CAL_PLUS,CAL_MINUS} from './actionType';
const initialState = {
    totals: 0,
    isLoading: false,
};
function caculatorNumberReducer(state = initialState, action) {
    let _state = {...state};
    switch(action.type){
        case CAL_PLUS:
            _state.totals = Number(action.payload.number1) + Number(action.payload.number2);
            break;
        case CAL_MINUS:
            _state.totals = Number(action.payload.number1) - Number(action.payload.number2);
            break;
    }
    return _state;
}
export default caculatorNumberReducer;