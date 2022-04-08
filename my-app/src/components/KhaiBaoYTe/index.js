import React, { useEffect, useState } from "react";
import { Form, Formik, withFormik, ErrorMessage } from 'formik';
import { TextField, Button, FormControl, Alert, Select, MenuItem, Paper, InputLabel, Container, Radio, RadioGroup, FormControlLabel, Checkbox } from "@mui/material";
import * as Yup from 'yup';
import axios from "axios";

const form = props => {
    const {
        classes,
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    const [urlApi, setUrl] = useState("");
    const [province, setProvince] = useState();
    const [filteredProvinces, setfilteredProvinces] = useState([]);
    const fetchProvinces = () => {
        const rdata = axios.get(`${urlApi}/p/`).then(function (response) {
            setfilteredProvinces(response.data);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleSearchingProvince = (evt) => {
        //https://provinces.open-api.vn/

        const provinceValue = evt.target.value;
        setUrl("https://provinces.open-api.vn/api");

        setProvince(provinceValue);
    }
    React.useEffect(() => {
        if (urlApi) {
            fetchProvinces();
        }

    }, [urlApi]);
    return (
        <Container className="container">

            <Paper sx={{ width: '100%', p: 2 }}>
                <h2 align="center">Khai báo Y tế</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form>

                        <TextField sx={{ width: '100%', mb: 2 }}
                            id="name" name="name" type="text"
                            label={"Họ tên"}
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.name ? errors.name : ""}
                            error={touched.name && Boolean(errors.name)}
                            margin="dense"
                            variant="outlined"
                            fullWidth

                        />

                        <TextField sx={{ width: '100%', mb: 2 }}
                            id="cmtnd" name="cmtnd" type="number"
                            label={"Hộ chiếu / Chứng minh thư nhân dân"}
                            value={values.cmtnd}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.cmtnd ? errors.cmtnd : ""}
                            error={touched.cmtnd && Boolean(errors.cmtnd)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                            />

                        <TextField sx={{ width: '100%', mb: 2 }}
                            id="birthday" name="birthday" type="number"
                            label={"Năm sinh"}
                            value={values.birthday}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.birthday ? errors.birthday : ""}
                            error={touched.birthday && Boolean(errors.birthday)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                            />
                        
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
                            label={"Quốc tịch"}
                            value={values.nationality}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.nationality ? errors.nationality : ""}
                            error={touched.nationality && Boolean(errors.nationality)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                            />
                        <TextField sx={{ width: '100%', mb: 2 }}
                            id="company" name="company" type="text"
                            label={"Công ty làm việc"} 
                            value={values.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.company ? errors.company : ""}
                            error={touched.company && Boolean(errors.company)}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                            />
                        <TextField sx={{ width: '100%', mb: 2 }}
                            id="position" name="position" type="text"
                            label={"Chức vụ"} />
                        <FormControlLabel
                            control={<Checkbox id="healthInsurance" name="healthInsurance" />}
                            label={"Có thẻ bảo hiểm y tế"}
                        />
                        <h3>
                            Địa chỉ liên lạc tại Việt Nam
                        </h3>
                        <FormControl sx={{ width: '100%', mb: 2 }}>
                            <InputLabel id="province-simple-select-label">Province</InputLabel>
                            <Select
                                name="Province"
                                labelId="province-simple-select-label"
                                id="province-simple-select"
                                value={province}
                                label="Province"
                                onClick={handleSearchingProvince}
                            >
                                {
                                    filteredProvinces && filteredProvinces.map(item => {
                                        console.log(item);
                                        return <MenuItem key={item.codename} value={item.codename}>{item.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                        <Button type="submit" variant="contained">Gửi</Button>
                    </Form>
                </Formik>

            </Paper>
        </Container>
    );
}

const initialValues = {
    name: "",
    cmtnd: "",
    birthday: "",
    nationality: "",
    position: "",
    province: "",
};




const validationSchema = Yup.object().shape({
    name: Yup.string().required("Yêu cầu nhập tên"),
    cmtnd: Yup.string().min(9, 'Nhập ít nhất 9 số').max(12, 'Nhập không quá 12 số').required("Yêu cầu nhập chứng minh thư nhân dân"),
    birthday: Yup.string().required("Nhập năm sinh"),
    nationality: Yup.string().required("Yêu cầu nhập Quốc tịch"),
    position: Yup.string().required("Yêu cầu nhập chức vụ"),
    province: Yup.string().required("Yêu cầu nhập tỉnh thành"),
});


const KhaiBaoYTe = withFormik({
    mapPropsToValues: (initialValues) => {
        return initialValues;
    },

    validationSchema: validationSchema,

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            // submit to the server
            setSubmitting(false);
        }, 1000);
    }
})(form);



    



export default KhaiBaoYTe;