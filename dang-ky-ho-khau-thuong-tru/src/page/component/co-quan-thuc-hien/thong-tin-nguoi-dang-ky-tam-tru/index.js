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
                Th??ng tin ng?????i ????ng k?? t???m tr??
            </h2>
            <FormControl fullWidth sx={{ m: 1 }}>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="noi-tam-tru"
                        control={<Checkbox />}
                        label="N??i t???m tr?? l?? n??i ??? hi???n t???i"
                        labelPlacement="end"
                        name="noi-tam-tru"
                    />
                </FormGroup>
            </FormControl>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="quoc-gia-tam-tru-label" align="left">Qu???c gia</InputLabel>
                        <Select
                            labelId="quoc-gia-tam-tru-label"
                            id="quoc-gia-tam-tru"
                            align="left"
                            value={quocgiaTamtru}
                            label="Qu???c gia"
                            onChange={handleChangeQuocGiaTamTru}
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
                        <InputLabel id="tinh-thanhpho-tam-tru-label" align="left">T???nh / th??nh ph???</InputLabel>
                        <Select
                            labelId="tinh-thanhpho-tam-tru-label"
                            id="tinh-thanhpho-tam-tru"
                            align="left"
                            value={tinhthanhTamTru}
                            label="T???nh / th??nh ph???"
                            onChange={handleChangeThanhPhoTamTru}
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
                        <InputLabel id="quanhuyenTamTru-label">Qu???n/ Huy??n</InputLabel>
                        <Select
                            labelId="quanhuyenTamTru-label"
                            id="quanhuyenTamTru"
                            value={quanhuyenTamTru}
                            label="Qu???n/ Huy??n"
                            onChange={handleChangeQuanHuyenTamTru}
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
                        <InputLabel id="phuongxaTamTru-label">Ph?????ng / X??</InputLabel>
                        <Select
                            labelId="phuongxaTamTru-label"
                            id="phuongxaTamTru"
                            value={phuongxaTamTru}
                            label="Ph?????ng / X??"
                            onChange={handleChangePhuongXaTamTru}
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
                            id="diachiTamTru" name="diachiTamTru" type="text"
                            label={"?????a ch??? (s??? nh??, ???????ng ph???, th??n, x??m, l??ng, ???p, b???n, bu??n, phum, s??c)"}
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