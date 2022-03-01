import React,{useState,useEffect} from "react";
import HideMe from "../HideMe";
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
        window.localStorage.setItem('text',isText)
    })
    return (
        <React.Fragment>
            <div>
                Bai 1
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