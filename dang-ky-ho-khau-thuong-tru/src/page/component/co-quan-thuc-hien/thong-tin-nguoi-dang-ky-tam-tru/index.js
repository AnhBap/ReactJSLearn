import React, { useEffect, useState } from "react";

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField, FormGroup, Button, Grid, FormControl, Alert, Select, SelectChangeEvent, MenuItem, Paper, InputLabel, Container, Radio, RadioGroup, FormControlLabel, Checkbox } from "@mui/material";
const ThongTinDangKyTamTru = props => {

    const [gioitinh, setGioitinh] = React.useState('');
    const [cmtnd, setCmtnd] = React.useState('');
    const [sohochieu, setSohochieu] = React.useState('');
    const [sodienthoai, setSodienthoai] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [quocgiaTamtru, setQuocGiaTamTru] = React.useState('');
    const [tinhthanhTamTru, setTinhThanhTamTru] = React.useState('');
    const [quanhuyenTamTru, setQuanHuyenTamTru] = React.useState('');
    const [phuongxaTamTru, setPhuongXaTamTru] = React.useState('');
    const [diachiTamTru, setDiaChiTamTru] = React.useState('');

    const handleChangeQuocGiaTamTru = (event: SelectChangeEvent) => {
        setQuocGiaTamTru(event.target.value);
    };
    const handleChangeThanhPhoTamTru = (event: SelectChangeEvent) => {
        setTinhThanhTamTru(event.target.value);
    };
    const handleChangeQuanHuyenTamTru = (event: SelectChangeEvent) => {
        setQuanHuyenTamTru(event.target.value);
    };
    const handleChangePhuongXaTamTru = (event: SelectChangeEvent) => {
        setPhuongXaTamTru(event.target.value);
    };

    const handleChangeDiaChiTamTru = (event: SelectChangeEvent) => {
        setDiaChiTamTru(event.target.value);
    };

    
    
    const handleChangeGioiTinh = (event: SelectChangeEvent) => {
        setGioitinh(event.target.value);
    };
    const handleChangeCmtnd = (event: SelectChangeEvent) => {
        setCmtnd(event.target.value);
    };


    const [ngaykhaisinh, setNgaykhaisinh] = React.useState(
        new Date(),
    );

    const handleChange = (newValue: Date) => {
        setNgaykhaisinh(newValue);
    };

    const handleChangeSohochieu = (event) => {
        setSohochieu(event.target.value);
    }

    const handleChangeSodienthoai = (event) => {
        setSodienthoai(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    
    return (
        <React.Fragment>
            <h2 align="left">
                Thông tin người đăng ký tạm trú
            </h2>
            <FormControl fullWidth sx={{ m: 1 }}>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="noi-tam-tru"
                        control={<Checkbox />}
                        label="Nơi tạm trú là nơi ở hiện tại"
                        labelPlacement="end"
                        name="noi-tam-tru"
                    />
                </FormGroup>
            </FormControl>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="quoc-gia-tam-tru-label" align="left">Quốc gia</InputLabel>
                        <Select
                            labelId="quoc-gia-tam-tru-label"
                            id="quoc-gia-tam-tru"
                            align="left"
                            value={quocgiaTamtru}
                            label="Quốc gia"
                            onChange={handleChangeQuocGiaTamTru}
                        >
                            <MenuItem value="">
                                <em>Chưa lựa chọn</em>
                            </MenuItem>
                            <MenuItem value={'Việt Nam'}>Việt Nam</MenuItem>
                            <MenuItem value={'USA'}>USA</MenuItem>
                            <MenuItem value={'Trung Quốc'}>Trung Quốc</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="tinh-thanhpho-tam-tru-label" align="left">Tỉnh / thành phố</InputLabel>
                        <Select
                            labelId="tinh-thanhpho-tam-tru-label"
                            id="tinh-thanhpho-tam-tru"
                            align="left"
                            value={tinhthanhTamTru}
                            label="Tỉnh / thành phố"
                            onChange={handleChangeThanhPhoTamTru}
                        >
                            <MenuItem value="">
                                <em>Chưa lựa chọn</em>
                            </MenuItem>
                            <MenuItem value={'HaNoi'}>Hà Nội</MenuItem>
                            <MenuItem value={'DaNang'}>Đà Nẵng</MenuItem>
                            <MenuItem value={'HoChiMinh'}>TP.Hồ Chí Minh</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="quanhuyenTamTru-label">Quận/ Huyên</InputLabel>
                        <Select
                            labelId="quanhuyenTamTru-label"
                            id="quanhuyenTamTru"
                            value={quanhuyenTamTru}
                            label="Quận/ Huyên"
                            onChange={handleChangeQuanHuyenTamTru}
                            align="left"
                        >
                            <MenuItem value="">
                                <em>Chưa lựa chọn</em>
                            </MenuItem>
                            <MenuItem value={'HaNoi'}>Hà Nội</MenuItem>
                            <MenuItem value={'DaNang'}>Đà Nẵng</MenuItem>
                            <MenuItem value={'HoChiMinh'}>TP.Hồ Chí Minh</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="phuongxaTamTru-label">Phường / Xã</InputLabel>
                        <Select
                            labelId="phuongxaTamTru-label"
                            id="phuongxaTamTru"
                            value={phuongxaTamTru}
                            label="Phường / Xã"
                            onChange={handleChangePhuongXaTamTru}
                            align="left"
                        >
                            <MenuItem value="">
                                <em>Chưa lựa chọn</em>
                            </MenuItem>
                            <MenuItem value={'Cầu Diễn'}>Cầu Diễn</MenuItem>
                            <MenuItem value={'Mỹ Đình 1'}>Mỹ Đình 1</MenuItem>
                            <MenuItem value={'Mỹ Đình 2'}>Mỹ Đình 2</MenuItem>
                            <MenuItem value={'Phú Đô'}>Phú Đô</MenuItem>
                            <MenuItem value={'Mễ Trì'}>Mễ Trì</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField sx={{ width: '100%' }}
                            id="diachiTamTru" name="diachiTamTru" type="text"
                            label={"Địa chỉ (số nhà, đường phố, thôn, xóm, làng, ấp, bản, buôn, phum, sóc)"}
                            variant="outlined"
                            fullWidth
                            value={diachiTamTru}
                            onChange={(event) => handleChangeDiaChiTamTru(event)}

                        />
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
export default ThongTinDangKyTamTru;