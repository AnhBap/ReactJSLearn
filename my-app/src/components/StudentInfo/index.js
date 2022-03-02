import React from "react";
function StudentInfo(props){
    return(
        <tr key={props.student.uuid}>
            <th>{props.student.fullName}</th>
            <th>{props.student.points}</th>
            <th onClick={(event)=> props.onDisbanStudentCallback(props.student.key)}>Remove</th>
        </tr>
    );
}
export default StudentInfo