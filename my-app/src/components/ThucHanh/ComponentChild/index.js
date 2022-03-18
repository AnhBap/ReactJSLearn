import React from "react";
function ComponentChild(props){
    const {
        multiplication,
        valNum1,
        valNum2,
        division,
        addPlus,
        addMinus,
        ...rest
    } = props;
    const addPlusChild=(evt) => {
        addPlus && addPlus();
    }
    return(
        <div>
            <button onClick={(evt)=>addPlusChild(evt)} disabled={!valNum1 || !valNum2 } {...rest}>+</button>
            <button onClick={addMinus} disabled={!valNum1 || !valNum2 } {...rest}>-</button>
            <button onClick={multiplication} disabled={!valNum1 || !valNum2 } {...rest}> *</button>
            <button onClick={division} disabled={!valNum1 || !valNum2 } {...rest}>/</button>
        </div>
    );
}
export default ComponentChild;