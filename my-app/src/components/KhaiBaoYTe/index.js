import React ,{useEffect,useState} from "react";
import {Form,Formik,Field} from 'formik';
import { TextField, Paper ,Container, Radio, RadioGroup, FormControlLabel,Checkbox} from "@mui/material";
import * as Yup from 'yup';
import axios from "axios";
const CheckFormSchema = Yup.object().shape({
    name:Yup.string()
    .required('Required email')
},
{
    password:Yup.string()
    .required('Required password')
}
);
function KhaiBaoYTe(){
    const BASE_API_URL = 'https://provinces.open-api.vn/api';
    const [province,setProvince] = useState();
    const [filteredProvinces,setfilteredProvinces] = useState([]);
    const  fetchProvinces =() => {
        const rdata =  axios.get(`${BASE_API_URL}/p/`).then(function (response) {
            setfilteredProvinces(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const handleSearchingProvince=(evt)=>{
        //https://provinces.open-api.vn/examples
        //https://github.com/hongquan/vn-provinces-vue-demo/blob/main/src/components/LocationPicker.vue
        
        const provinceValue= evt.target.value;
        fetchProvinces();
        setProvince(provinceValue);
    }
    return(
        <Container className="container">
            
            <Paper  sx={{ width: '100%', p:2 }}>
                <h2 align="center">Khai báo Y tế</h2>
                <Formik
                    initialValues={{name:''}}
                    validationSchema={CheckFormSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({
                        errors,
                        touched,
                    }) => (
                    <Form>
                        <TextField  sx={{ width: '100%' , mb: 2}}
                        id="name" name="name" type="text" 
                        label={"Họ tên"}/>
                        <TextField sx={{ width: '100%', mb: 2 }}
                        id="cmtnd" name="cmtnd" type="number" 
                        label={"Hộ chiếu / Chứng minh thư nhân dân"}/>
                        <TextField sx={{ width: '100%', mb: 2 }}
                        id="birthday" name="birthday" type="number" 
                        label={"Năm sinh"}/>
                        <TextField sx={{ width: '100%', mb: 2 }}
                        id="birthday" name="birthday" type="number" 
                        label={"Năm sinh"}/>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                            <FormControlLabel value="male" control={<Radio />} label="Nam" />
                        </RadioGroup>
                        <TextField sx={{ width: '100%', mb: 2 }}
                        id="nationality" name="nationality" type="text" 
                        label={"Quốc tịch"}/>
                        <TextField sx={{ width: '100%', mb: 2 }}
                        id="company" name="company" type="text" 
                        label={"Công ty làm việc"}/>
                        <TextField sx={{ width: '100%', mb: 2 }}
                        id="position" name="position" type="text" 
                        label={"Chức vụ"}/>
                        <FormControlLabel
                            control={<Checkbox id="healthInsurance" name="healthInsurance" />}
                            label={"Có thẻ bảo hiểm y tế"}
                        />
                        <h3>
                            Địa chỉ liên lạc tại Việt Nam
                        </h3>
                        <TextField sx={{ width: '100%', mb: 2 }}
                        id="province" name="province" type="text" value={province}
                        label={"Tỉnh thành"} onChange={(evt)=>handleSearchingProvince(evt)}/>
                        
                    </Form>
                    )}
                </Formik>
            
            </Paper>
        </Container>
    );
}
export default KhaiBaoYTe;