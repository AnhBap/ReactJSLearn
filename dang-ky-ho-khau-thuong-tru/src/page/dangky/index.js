import React, { useEffect, useState } from "react";
import { Form, Formik, withFormik, ErrorMessage } from 'formik';
import { TextField, Button, FormControl, Alert, Select, MenuItem, Paper, InputLabel, Container, Radio, RadioGroup, FormControlLabel, Checkbox } from "@mui/material";
import * as Yup from 'yup';
import axios from "axios";
import CoQuanThucHien from "../component/co-quan-thuc-hien";
import ThongTinNguoiDangKy from "../component/co-quan-thuc-hien/thong-tin-nguoi-dang-ky-thuong-tru";
const FormDangKy = props => {
    return (
        <Container className="container">
            <Paper sx={{ width: '100%', p: 2 }}>
                <h2 align="center">Đăng ký thường trú</h2>
                <CoQuanThucHien></CoQuanThucHien>
                <ThongTinNguoiDangKy></ThongTinNguoiDangKy>
            </Paper>
        </Container>
    );
}
export default FormDangKy;