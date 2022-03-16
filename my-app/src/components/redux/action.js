import { INCREMENT , INCREMENT_SUCCESS , INCREMENT_FAIL} from "./constants";
export function increment(){
    return{
        type: INCREMENT
    }
}
export function incrementSuccess(response){
    return{
        type: INCREMENT,
        response
    }
}
export function incrementFailed(errors){
    return{
        type: INCREMENT,
        errors
    }
}