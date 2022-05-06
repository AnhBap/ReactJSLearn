import React, { useEffect, useState } from "react";

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField, FormGroup, Button, Grid, FormControl, Alert, Select, SelectChangeEvent, MenuItem, Paper, InputLabel, Container, Radio, RadioGroup, FormControlLabel, Checkbox } from "@mui/material";
const ThongTinNguoiDangKy = props => {

    const [gioitinh, setGioitinh] = React.useState('');
    const [cmtnd, setCmtnd] = React.useState('');
    const [sohochieu, setSohochieu] = React.useState('');
    const [sodienthoai, setSodienthoai] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [quocgia, setQuocGia] = React.useState('');
    const [tinhthanhThuongTru, setTinhThanhThuongTru] = React.useState('');
    const [quanhuyenThuongTru, setQuanHuyenThuongTru] = React.useState('');
    const [phuongxaThuongTru, setPhuongXaThuongTru] = React.useState('');
    const [diachiThuongTru, setDiaChiThuongTru] = React.useState('');

    const handleChangeQuocGia = (event: SelectChangeEvent) => {
        setQuocGia(event.target.value);
    };
    const handleChangeThanhPhoThuongTru = (event: SelectChangeEvent) => {
        setTinhThanhThuongTru(event.target.value);
    };
    const handleChangeQuanHuyenThuongTru = (event: SelectChangeEvent) => {
        setQuanHuyenThuongTru(event.target.value);
    };
    const handleChangePhuongXaThuongTru = (event: SelectChangeEvent) => {
        setPhuongXaThuongTru(event.target.value);
    };

    const handleChangeDiaChiThuongTru = (event: SelectChangeEvent) => {
        setDiaChiThuongTru(event.target.value);
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
                Thông tin người đăng ký thường trú
            </h2>
            <FormControl fullWidth sx={{ m: 1 }}>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="nguoi-khai-thong-tin-la-nguoi-dang-ky-thuong-tru"
                        control={<Checkbox />}
                        label="Người khai thông tin là người đăng ký thường trú"
                        labelPlacement="end"
                        name="nguoi-khai-thong-tin-la-nguoi-dang-ky-thuong-tru"
                    />
                    <FormControlLabel
                        value="khai-ho"
                        control={<Checkbox />}
                        label="Khai hộ"
                        labelPlacement="end"
                        name="khai-ho"
                    />
                </FormGroup>
            </FormControl>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField sx={{ width: '100%' }}
                            id="name" name="name" type="text"
                            label={"Họ và tên"}
                            variant="outlined"
                            fullWidth

                        />
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Ngày khai sinh"
                                inputFormat="dd/MM/yyyy"
                                margin="dense"
                                value={ngaykhaisinh}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel id="gioi-tinh-label" align="left">Giới tính</InputLabel>
                        <Select
                            labelId="gioi-tinh-label"
                            id="gioi-tinh"
                            align="left"
                            value={gioitinh}
                            label="Giới tính"
                            onChange={handleChangeGioiTinh}
                        >
                            <MenuItem value="">
                                <em>Chưa lựa chọn</em>
                            </MenuItem>
                            <MenuItem value={'Nam'}>Nam</MenuItem>
                            <MenuItem value={'Nữ'}>Nữ</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField sx={{ width: '100%' }}
                            id="cmtnd" name="cmtnd" type="text"
                            label={"Số CMND/CCCD"}
                            variant="outlined"
                            fullWidth
                            value={cmtnd}
                            onChange={handleChangeCmtnd}

                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField sx={{ width: '100%' }}
                            id="sohochieu" name="sohochieu" type="text"
                            label={"Số hộ chiếu"}
                            variant="outlined"
                            fullWidth
                            value={sohochieu}
                            onChange={(event) => handleChangeSohochieu(event)}

                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField sx={{ width: '100%' }}
                            id="sodienthoai" name="sodienthoai" type="number"
                            label={"Số điện thoại"}
                            variant="outlined"
                            fullWidth
                            value={sodienthoai}
                            onChange={(event) => handleChangeSodienthoai(event)}

                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField sx={{ width: '100%' }}
                            id="email" name="email" type="email"
                            label={"Email"}
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(event) => handleChangeEmail(event)}

                        />
                    </FormControl>
                </Grid>
            </Grid>
            <FormControl fullWidth sx={{ m: 1 }}>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="noi-thuong-tru"
                        control={<Checkbox />}
                        label="Nơi thường trú là nơi ở hiện tại"
                        labelPlacement="end"
                        name="noi-thuong-tru"
                    />
                </FormGroup>
            </FormControl>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="quoc-gia-label" align="left">Quốc gia</InputLabel>
                        <Select
                            labelId="quoc-gia-label"
                            id="quoc-gia"
                            align="left"
                            value={quocgia}
                            label="Quốc gia"
                            onChange={handleChangeQuocGia}
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
                        <InputLabel id="tinh-thanhpho-thuong-tru-label" align="left">Tỉnh / thành phố</InputLabel>
                        <Select
                            labelId="tinh-thanhpho-thuong-tru-label"
                            id="tinh-thanhpho-thuong-tru"
                            align="left"
                            value={tinhthanhThuongTru}
                            label="Tỉnh / thành phố"
                            onChange={handleChangeThanhPhoThuongTru}
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
                        <InputLabel id="quanhuyenThuongTru-label">Quận/ Huyên</InputLabel>
                        <Select
                            labelId="quanhuyenThuongTru-label"
                            id="quanhuyenThuongTru"
                            value={quanhuyenThuongTru}
                            label="Quận/ Huyên"
                            onChange={handleChangeQuanHuyenThuongTru}
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
                        <InputLabel id="phuongxaThuongTru-label">Phường / Xã</InputLabel>
                        <Select
                            labelId="phuongxaThuongTru-label"
                            id="phuongxaThuongTru"
                            value={phuongxaThuongTru}
                            label="Phường / Xã"
                            onChange={handleChangePhuongXaThuongTru}
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
                            id="diachiThuongTru" name="diachiThuongTru" type="text"
                            label={"Địa chỉ (số nhà, đường phố, thôn, xóm, làng, ấp, bản, buôn, phum, sóc)"}
                            variant="outlined"
                            fullWidth
                            value={diachiThuongTru}
                            onChange={(event) => handleChangeDiaChiThuongTru(event)}

                        />
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
export default ThongTinNguoiDangKy;