import React, {useState,useEffect} from "react";
function FormSignUp(){
    const [errors,setErrors] = useState();
    const [pass,setPass] = useState();
    const [confirm,setConfirm] = useState();
    useEffect(()=>{
    })
    const handUseName = (evt) =>{
        const valUsername = evt.target.value;
        if(valUsername.length < 5 || valUsername.length  > 20 ){
            const errorUsername = "Username must be a max of 20 characters and min 5 characters";
            setErrors(errorUsername );
        }
        
    }
    const handEmail = (evt) =>{
        const valEmail = evt.target.value;
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(valEmail)) {
            const errorEmail = "Email not valid";
            setErrors(errorEmail );
          } 
    }
    const handPass = (evt) => {
        const valPass = evt.target.value;
        if(valPass.length < 5 ){
            const errorPass = "Password must min 5 characters";
            setErrors(errorPass );
        }else {
            setPass(valPass);
        }
    }
    const handConfirm = (evt) => {
        const valPassconfirm = evt.target.value;
        if(valPassconfirm.length < 5 ){
            const errorPass = "Password must min 5 characters";
            setErrors(errorPass );
        } else {
            setConfirm(valPassconfirm);
        }
        if(pass !== confirm){
            const errorPassConfirm = "Password not match";
            setErrors(errorPassConfirm );
        }
       
    }
    useEffect(()=>{
    },[errors])
    return(
        <React.Fragment>
            <h2>Sign Up</h2>
            <form>
                <label>Username</label>
                <input name="username" type="text" onBlur={(evt)=> {handUseName(evt)}}/>
                <label>Email</label>
                <input name="email" type="email" onBlur={(evt)=> {handEmail(evt)}}/>
                <label>Pass</label>
                <input name="password" type="password" onBlur={(evt)=> {handPass(evt)}}/>
                <label>Confirm</label>
                <input name="confirm_password" type="password" onBlur={(evt)=> {handConfirm(evt)}}/>
                {errors}
            </form>
        </React.Fragment>
    );

}
export default FormSignUp;