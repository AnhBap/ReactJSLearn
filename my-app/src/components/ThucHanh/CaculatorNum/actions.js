import {CAL_PLUS,CAL_MINUS} from './actionType';
export function calMunute(payload){
    return {
        type: CAL_MINUS,
        payload
      };
}
export function calPlus(payload){
    return{
        type: CAL_PLUS,
        payload
    }
}