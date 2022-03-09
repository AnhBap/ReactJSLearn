import React, {useState} from "react";
import Ticket from "../Ticket";
import { v4 as uuid } from "uuid";
import moment from 'moment'
function ToDoList(){
    const [ticketVal,setTicketVal] = React.useState("");
    const [createdDate,setcreatedDate] = React.useState("");
    const [Columnkey,setColumnkey] = React.useState("todos");

    const content = {
        todos: {
          key: 'todos',
          tickets: [],
        },
        inProgress: {
          key: 'in-progress',
          tickets: [],
        },
        done: {
          key: 'done',
          tickets: [],
        },
        needReview: {
          key: 'need-review',
          tickets: [],
        },
      }

    const createTicketFunc = (evt)=>{
        console.log(evt.target);
        let _ticketValue = document.getElementById("val-ticket").value;
        setTicketVal(_ticketValue);
        if(evt && _ticketValue.length<1){
            alert("Please enter content for ticket");
        } else if (_ticketValue.length<4) {
            
        } else {
            document.getElementById("todos").innerHTML = ticketVal;
            setcreatedDate(moment().format('YYYY/MM/DD'));
        }
        
    }

        const handleColumnChange = (evt,currentColumnkey,targetColumnKey)=>{
          
            setColumnkey(targetColumnKey);
            let _infor = document.getElementById(currentColumnkey).innerHTML;
            document.getElementById(currentColumnkey).innerHTML ='';
            document.getElementById(targetColumnKey).innerHTML =  _infor;

        }
    
    return(
        <React.Fragment>
           
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>TO DO</th>
                            <th>IN PROGRESS</th>
                            <th>DONE</th>
                            <th>NEED REVIEW</th>
                        </tr>
                    </thead>
                    
                    <tr>
                        <td width="25%" id="todos"><Ticket id={uuid()} text={ticketVal} createdDate={createdDate}/></td>
                        <td idth="25%" id="in-progress"></td>
                        <td  idth="25%"id="done"></td>
                        <td idth="25%" id="need-review"></td>
                    </tr>
                </table>
                <label>Tạo ticket</label>
                <input id="val-ticket" type="text" value={ticketVal}/>
                <button onClick={evt=>createTicketFunc(evt)}>Create Ticket</button>
                <button onClick={evt=>handleColumnChange(evt,Columnkey,'todos')}>Todos</button>
                <button onClick={evt=>handleColumnChange(evt,Columnkey,'in-progress')}>In process</button>
                <button onClick={evt=>handleColumnChange(evt,Columnkey,'done')}>Done</button>
                <button onClick={evt=>handleColumnChange(evt,Columnkey,'need-review')}>Need Review</button>
            </div>
        </React.Fragment>
        
    );
}
export default ToDoList;