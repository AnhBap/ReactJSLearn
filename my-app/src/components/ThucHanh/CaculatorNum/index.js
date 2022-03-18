import React from "react";
import { connect } from 'react-redux';
import { calPlus , calMunute } from './actions';
function CaculatorNum(props){
    const [valNum1,setvalNum1] = React.useState(0);
    const [valNum2,setvalNum2] = React.useState(0);
    const [totalval,setTotalCal] = React.useState(0);
    const { 
        totals,
        isLoading,
        calPlus,
        calMunute,
    } = props;
    const setFuncVal1 = (evt)=>{
      setvalNum1(evt.target.value);
    }
    const setFuncVal2 = (evt)=>{
      setvalNum2(evt.target.value);
    }
  const calPlusButton = () => {
      calPlus({
        number1: Number(valNum1),
        number2: Number(valNum2),
      });
  };
  const calMinuteButton = () => {
    calMunute({
      number1: Number(valNum1),
      number2: Number(valNum2),
    });
};
React.useEffect(() => {
  if (totals) {
    setTotalCal(totals);
  }
}, [totals]);
  
  return(
      <div style={{display: 'flex'}}>
          <input type="number" value={valNum1} onChange={(evt) => setFuncVal1(evt)} />
          <input type="number" value={valNum2} onChange={(evt) => setFuncVal2(evt)}/>
          <p>Result: {totals}</p>
          <button onClick = {calPlusButton}>+</button>
          <button onClick = {calMinuteButton}>-</button>
      </div>
  );
}
const mapStateToProps = state => {
    return {
      totals: state.caculatorNumberReducer.totals,
      isLoading: state.caculatorNumberReducer.isLoading,
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      dispatch,
      calPlus: (formData) => dispatch(calPlus(formData)),
      calMunute: (formData) => dispatch(calMunute(formData)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CaculatorNum);