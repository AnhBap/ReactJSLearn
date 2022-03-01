import React,{useState} from "react";
function HideMe(props){
    const {text} = props;
    return(
        <React.Fragment>
            <div>
                <h3>
                    {text}
                </h3>
            </div>
            
        </React.Fragment>
    )
}
export default HideMe;