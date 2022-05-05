import React, { useEffect, useState } from "react";

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField,FormGroup,Button,Grid, FormControl, Alert, Select, SelectChangeEvent, MenuItem, Paper, InputLabel, Container, Radio, RadioGroup, FormControlLabel, Checkbox } from "@mui/material";
const ThongTinNguoiDangKy = props => {

    const [gioitinh, setGioitinh] = React.useState('');
    const [cmtnd, setCmtnd] = React.useState('');
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
    return (
        <React.Fragment>
            <h2 align="left">
                Thông tin người đăng ký thường trú
            </h2>
            <FormControl fullWidth  sx={{ m: 1 }}>
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
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <TextField sx={{ width: '100%'}}
                            id="name" name="name" type="text"
                            label={"Họ và tên"}
                            variant="outlined"
                            fullWidth

                        />
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
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
                    <FormControl fullWidth  sx={{ m: 1 }}>
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
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <TextField sx={{ width: '100%'}}
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
            
        </React.Fragment>
    );
}
export default ThongTinNguoiDangKy;