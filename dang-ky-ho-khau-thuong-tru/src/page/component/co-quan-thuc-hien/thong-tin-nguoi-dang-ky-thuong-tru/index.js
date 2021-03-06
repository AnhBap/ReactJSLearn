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
                Th??ng tin ng?????i ????ng k?? th?????ng tr??
            </h2>
            <FormControl fullWidth sx={{ m: 1 }}>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="nguoi-khai-thong-tin-la-nguoi-dang-ky-thuong-tru"
                        control={<Checkbox />}
                        label="Ng?????i khai th??ng tin l?? ng?????i ????ng k?? th?????ng tr??"
                        labelPlacement="end"
                        name="nguoi-khai-thong-tin-la-nguoi-dang-ky-thuong-tru"
                    />
                    <FormControlLabel
                        value="khai-ho"
                        control={<Checkbox />}
                        label="Khai h???"
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
                            label={"H??? v?? t??n"}
                            variant="outlined"
                            fullWidth

                        />
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Ng??y khai sinh"
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
                        <InputLabel id="gioi-tinh-label" align="left">Gi???i t??nh</InputLabel>
                        <Select
                            labelId="gioi-tinh-label"
                            id="gioi-tinh"
                            align="left"
                            value={gioitinh}
                            label="Gi???i t??nh"
                            onChange={handleChangeGioiTinh}
                        >
                            <MenuItem value="">
                                <em>Ch??a l???a ch???n</em>
                            </MenuItem>
                            <MenuItem value={'Nam'}>Nam</MenuItem>
                            <MenuItem value={'N???'}>N???</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField sx={{ width: '100%' }}
                            id="cmtnd" name="cmtnd" type="text"
                            label={"S??? CMND/CCCD"}
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
                            label={"S??? h??? chi???u"}
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
                            label={"S??? ??i???n tho???i"}
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
                        label="N??i th?????ng tr?? l?? n??i ??? hi???n t???i"
                        labelPlacement="end"
                        name="noi-thuong-tru"
                    />
                </FormGroup>
            </FormControl>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="quoc-gia-label" align="left">Qu???c gia</InputLabel>
                        <Select
                            labelId="quoc-gia-label"
                            id="quoc-gia"
                            align="left"
                            value={quocgia}
                            label="Qu???c gia"
                            onChange={handleChangeQuocGia}
                        >
                            <MenuItem value="">
                                <em>Ch??a l???a ch???n</em>
                            </MenuItem>
                            <MenuItem value={'Vi???t Nam'}>Vi???t Nam</MenuItem>
                            <MenuItem value={'USA'}>USA</MenuItem>
                            <MenuItem value={'Trung Qu???c'}>Trung Qu???c</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="tinh-thanhpho-thuong-tru-label" align="left">T???nh / th??nh ph???</InputLabel>
                        <Select
                            labelId="tinh-thanhpho-thuong-tru-label"
                            id="tinh-thanhpho-thuong-tru"
                            align="left"
                            value={tinhthanhThuongTru}
                            label="T???nh / th??nh ph???"
                            onChange={handleChangeThanhPhoThuongTru}
                        >
                            <MenuItem value="">
                                <em>Ch??a l???a ch???n</em>
                            </MenuItem>
                            <MenuItem value={'HaNoi'}>H?? N???i</MenuItem>
                            <MenuItem value={'DaNang'}>???? N???ng</MenuItem>
                            <MenuItem value={'HoChiMinh'}>TP.H??? Ch?? Minh</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="quanhuyenThuongTru-label">Qu???n/ Huy??n</InputLabel>
                        <Select
                            labelId="quanhuyenThuongTru-label"
                            id="quanhuyenThuongTru"
                            value={quanhuyenThuongTru}
                            label="Qu???n/ Huy??n"
                            onChange={handleChangeQuanHuyenThuongTru}
                            align="left"
                        >
                            <MenuItem value="">
                                <em>Ch??a l???a ch???n</em>
                            </MenuItem>
                            <MenuItem value={'HaNoi'}>H?? N???i</MenuItem>
                            <MenuItem value={'DaNang'}>???? N???ng</MenuItem>
                            <MenuItem value={'HoChiMinh'}>TP.H??? Ch?? Minh</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="phuongxaThuongTru-label">Ph?????ng / X??</InputLabel>
                        <Select
                            labelId="phuongxaThuongTru-label"
                            id="phuongxaThuongTru"
                            value={phuongxaThuongTru}
                            label="Ph?????ng / X??"
                            onChange={handleChangePhuongXaThuongTru}
                            align="left"
                        >
                            <MenuItem value="">
                                <em>Ch??a l???a ch???n</em>
                            </MenuItem>
                            <MenuItem value={'C???u Di???n'}>C???u Di???n</MenuItem>
                            <MenuItem value={'M??? ????nh 1'}>M??? ????nh 1</MenuItem>
                            <MenuItem value={'M??? ????nh 2'}>M??? ????nh 2</MenuItem>
                            <MenuItem value={'Ph?? ????'}>Ph?? ????</MenuItem>
                            <MenuItem value={'M??? Tr??'}>M??? Tr??</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField sx={{ width: '100%' }}
                            id="diachiThuongTru" name="diachiThuongTru" type="text"
                            label={"?????a ch??? (s??? nh??, ???????ng ph???, th??n, x??m, l??ng, ???p, b???n, bu??n, phum, s??c)"}
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