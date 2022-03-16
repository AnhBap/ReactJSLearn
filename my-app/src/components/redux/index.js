import React from "react";
import {connect} from 'react-reduct';
import {increment} from './action';

function ReduxTut(props){
    const {numb,increment} = props;
    return (
        <div>
            <h3>The number is : {numb && numb}</h3>
            <button onClick = {handleIncrement}>+</button>
        </div>
    );
}
const handleIncrement = () => {
    dispatch(increment());
}
const mapStateToProps = state => {

}
const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        increment : () => dispatch(increment())
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(ReduxTut);