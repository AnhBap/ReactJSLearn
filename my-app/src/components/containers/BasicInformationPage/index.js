import React, {useState, memo} from "react";
import AppInput from "../AppInput";

function BasicInformationPage(props){
    const basicInfo = {
        fullname: 'Nguyen Van A',
        age : 33,
        email: 'codegym-training@gmail.com',
        address: 'Hanoi,Vietnam'
    }



    //Tao ra 1 state, information laf 1 onject chuwa taast car casc thong tin casc fiels ben dưới
    const [information,setInformation] = React.useState({});
    const [fillTrigger,setfillTrigger] = React.useState(false);
    const onGetFieldsValues = (evt, fieldName)=>{
        let _information = {...information};
        _information[evt.target.name] = evt.target.value;
        //Hoac
        //_information[fieldName] = evt.target.value;
        setInformation(_information);
    }

    const onTriggerFill = ()=>{
        setfillTrigger(!fillTrigger);
    };

    const onTriggerFillResset =()=>{
        setInformation(
            {
                fullname: '',
                age : '',
                email: '',
                address: ''
            }
        );
    }

    //Tao ra 1 hamg onChange da update value cho cac fields, sau do set state vs cac gia tri do

    //componentDidmount
    React.useEffect(()=>{
        setInformation({});
    },[]);

    //componentDidUpdate
    React.useEffect(()=>{
        setInformation(basicInfo);
        //componentWillUnMount
        return()=>{
            setInformation({});
        }
    },[fillTrigger]);

    //Tao ra 1 liffe- cycle tuong duong vs componentWillmount life-cycle cua Class component
    //Co chuc nang reset value cac field, set tat ca cac field ve rong
    //console log state infomation đã check
    React.useEffect(()=>{
        setInformation([]);
    },[]);
    return(
        <div>
            <h1>
                Chào mừng đến với form thu nhập thông tin cơ bản
            </h1>
            <AppInput type="text" label="Full name" value={information.fullname} onChangeCallback={evt=>onGetFieldsValues(evt,'fullname')}/>
            <AppInput type="number" label="Age" value={information.age} onChangeCallback={evt=>onGetFieldsValues(evt,'age')}/>
            <AppInput type="email"label="Email"  value={information.email} onChangeCallback={evt=>onGetFieldsValues(evt,'email')}/>
            <AppInput type="text" label="Address" value={information.address} onChangeCallback={evt=>onGetFieldsValues(evt,'address')}/>
            <button onClick={onTriggerFill} >Update</button>
            <button onClick={onTriggerFillResset} >Reset</button>
        </div>
    )
}
export default memo(BasicInformationPage);