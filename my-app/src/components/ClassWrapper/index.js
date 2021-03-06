import React,{useState,useEffect} from 'react';
import { v4 as uuid } from "uuid";
import StudentInfo from '../StudentInfo';
function ClassWrapper(){
    const students = [
        {
          uuid: uuid(),
          fullName: 'Nguyen Van A',
          points: 10
        },
        {
          uuid: uuid(),
          fullName: 'Le Van B',
          points: 8
        },
        {
          uuid: uuid(),
          fullName: 'Pham Thi C',
          points: 7
        },
        {
          uuid: uuid(),
          fullName: 'Tran Van D',
          points: 6
        },
        {
          uuid: uuid(),
          fullName: 'Ta Thi Lang',
          points: 1
        },
    ];
    const [studentList,setstudentList] = useState(
      students
    );
   
  
    const onAddNewStudent = ()=>{
      let getFullName = document.getElementById("full-name").value;
      document.getElementById("full-name").value ="";
      document.getElementById("point").value =1;
      let getPoint = document.getElementById("point").value;
      let obj = {
        uuid: uuid(),
        fullName:getFullName,
        points:getPoint
      }
      setstudentList([...studentList,obj]);
        
    };
    const onDisbanStudent = (idremove) =>{
      const List = studentList.filter(student => {
        return student.uuid != idremove;
      });
      setstudentList(List);
    }

    return (
        <React.Fragment>
            <div>
                Lesson 2
            </div>
            <table>
              {studentList.map(student => (
                <StudentInfo student={student} onDisbanStudentCallback={() => onDisbanStudent(student.uuid)}/>
              ))}
                 
              </table>
            <div>
              <h3>Add new student</h3>
              <input type="text" id="full-name" name="fullName" placeholder='FullName'/>
              <input type="number" id="point" name="point" placeholder='Point'/>
              <button onClick={(event)=>onAddNewStudent()}>Add New</button>
            </div>
        </React.Fragment>
    )
}
export default ClassWrapper