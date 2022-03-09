import React, {useState} from "react";

function Ticket({id,text,createdDate}){

    
    return(
        <React.Fragment>
           <span>ID:{id} </span>
           <span>Title:{text} </span>
           <span>Date:{createdDate} </span>
        </React.Fragment>
        
    );
}
export default Ticket;