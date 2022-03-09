import React,{useState,useEffect,useCallback,useMemo} from "react";
import HideMe from "../HideMe";
//useMemo Lưu caching , wrap-up lại data
function GameWrapper(){
    const [isChildComponentHidden, setChildComponentHidden] = useState(false);
    const [isText, setText] = useState(
        window.localStorage.getItem('text') || ''
    );
    const toggleShow = () =>{
        if(isChildComponentHidden == false){
            setChildComponentHidden(true);
            setText('Child component is shown now!');
        } else {
            setChildComponentHidden(false);
            setText('Child component was hidden!');
        }
    }
    useEffect(()=>{
        //Moi useEffct chi xử lý 1 công việc
        window.localStorage.setItem('text',isText)
    })
    useEffect(()=>{
        //Moi useEffct chi xử lý 1 công việc
       
    },[setChildComponentHidden])
    return (
        <React.Fragment>
            <div>
                Lesson 1
            </div>
            <div>
                {isChildComponentHidden ? 'Show' : ''}
            </div>
            <div>
                <button onClick={(event)=>toggleShow()}>Click</button>
            </div>
            <HideMe text={isText}/>
        </React.Fragment>
    )
}
export default GameWrapper;