import React from "react";
function AppInput(props){
    const{type,label,value,onChangeCallback, ...rest} = props;
    const _onChangeCallback = (evt,type)=>{
        onChangeCallback(evt,type);
        console.log(evt.target.value)
    }
    //useMemo dùng để bọc lại các props nhận được từ component cha, chỉ dử dụng khi các props đó có cấu trúc phưc tạp
    //Chỉ dùng khi nested quá nhiều hoặc cấu trúc phức tap
    const memoValue = React.useMemo(()=>value,[value]);
    const valueChangeCalback = React.useCallback((evt,type)=>onChangeCallback(evt,type),[onChangeCallback]);
    return(
        <div>
            <label>{label || "Label"}</label>
            <input type={type} value={memoValue} onChange={valueChangeCalback} {...rest}/>
        </div>
    );
}
export default AppInput;