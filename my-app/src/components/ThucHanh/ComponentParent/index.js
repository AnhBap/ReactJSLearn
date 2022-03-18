import React,{useState} from "react";
import ComponentChild from '../ComponentChild';
function ComponentParent(props){
    const [valNum1,setvalNum1] = React.useState(0);
    const [valNum2,setvalNum2] = React.useState(0);
    const [result,setResult] = React.useState(null);
    
    const setFuncVal1 = (evt) => {
        setvalNum1( evt.target.value);
    }
    const setFuncVal2 = (evt) => {
        setvalNum2(evt.target.value);
    }
    const addMinus = () => {
        setResult(Number(valNum1) -  Number(valNum2));
    }
    const addPlus = () => {
        setResult(Number(valNum1) +  Number(valNum2));
    }
    const division = () => {
        setResult(Number(valNum1) /  Number(valNum2));
    }
    const multiplication = () => {
        setResult(Number(valNum1) *  Number(valNum2));
    }
    React.useEffect(() =>{

    },[valNum1]);
    React.useEffect(() =>{

    },[valNum2]);
    React.useEffect(() =>{

    },[result]);
    return(
        <div style={{display: 'flex'}}>
            <input type="number" value={valNum1} onChange={(evt) => setFuncVal1(evt)} />
            <input type="number" value={valNum2} onChange={(evt) => setFuncVal2(evt)}/>
            <p>Result: {result}</p>
            <ComponentChild
                addPlus ={addPlus}
                valNum1 = {valNum1}
                valNum2 = {valNum2}
                addMinus ={addMinus}
                division ={division}
                multiplication ={multiplication}
            />
        </div>
    )
}
export default ComponentParent;