import React,{useEffect,useState} from "react";
function HideMe(props){
    const {text} = props;
    const [state,setState] = useState(0);
    useEffect(()=>{
        console.log('Component is mounted');
        //get data API hoac hien thi
    },[state])
    return(
        <React.Fragment>
            <div>
                <h3>
                    {text}
                </h3>
                <button onClick={()=> setState(1)}>Click test</button>
            </div>
            
        </React.Fragment>
    )
}
export default HideMe;