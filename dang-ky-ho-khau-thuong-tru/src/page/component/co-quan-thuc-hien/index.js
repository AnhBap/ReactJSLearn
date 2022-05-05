import React, { useEffect, useState } from "react";
import { TextField, Button,Grid, FormControl, Alert, Select, SelectChangeEvent, MenuItem, Paper, InputLabel, Container, Radio, RadioGroup, FormControlLabel, Checkbox } from "@mui/material";
const CoQuanThucHien = props => {
    const [tinhthanh, setTinh] = React.useState('');
    const [quanhuyen, setquanhuyen] = React.useState('');
    const [phuongxa, setphuongxa] = React.useState('');
    const [coquanthuchien, setcoquanthuchien] = React.useState('');
    const [truonghop, settruonghop] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setTinh(event.target.value);
    };
    const handleChangeQuanHuyen = (event: SelectChangeEvent) => {
        setquanhuyen(event.target.value);
    };
    const handleChangePhuongXa = (event: SelectChangeEvent) => {
        setphuongxa(event.target.value);
    };
    const handleChangeCoQuanThucHien = (event: SelectChangeEvent) => {
        setcoquanthuchien(event.target.value);
    };
    const handleChangeTruongHop = (event: SelectChangeEvent) => {
        settruonghop(event.target.value);
    };

    
    return (
        <React.Fragment>
            <h2 align="left">
                Cơ quan thực hiện
            </h2>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="tinh-thanhpho-label" align="left">Tỉnh / thành phố</InputLabel>
                        <Select
                            labelId="tinh-thanhpho-label"
                            id="tinh-thanhpho"
                            align="left"
                            value={tinhthanh}
                            label="Tỉnh / thành phố"
                            onChange={handleChange}
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
                        <InputLabel id="quanhuyen-label">Quận/ Huyên</InputLabel>
                        <Select
                            labelId="quanhuyen-label"
                            id="quanhuyen"
                            value={quanhuyen}
                            label="Quận/ Huyên"
                            onChange={handleChangeQuanHuyen}
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
                        <InputLabel id="phuongxa-label">Phường / Xã</InputLabel>
                        <Select
                            labelId="phuongxa-label"
                            id="phuongxa"
                            value={phuongxa}
                            label="Phường / Xã"
                            onChange={handleChangePhuongXa}
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
                <Grid item xs={3}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="coquanthuchien-label">Cơ quan thực hiện</InputLabel>
                        <Select
                            labelId="coquanthuchien-label"
                            id="coquanthuchien"
                            value={coquanthuchien}
                            label="Cơ quan thực hiện"
                            onChange={handleChangeCoQuanThucHien}
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
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth  sx={{ m: 1 }}>
                        <InputLabel id="thuonghop-label" align="left">Trường hợp</InputLabel>
                        <Select
                            labelId="thuonghop-label"
                            id="thuonghop"
                            align="left"
                            value={truonghop}
                            label="Trường hợp"
                            onChange={handleChangeTruongHop}
                        >
                            <MenuItem value="">
                                <em>Chưa lựa chọn</em>
                            </MenuItem>
                            <MenuItem value={'Lựa chọn 1'}>Lựa chọn 1</MenuItem>
                            <MenuItem value={'Lựa chọn 2'}>Lựa chọn 2</MenuItem>
                            <MenuItem value={'Lựa chọn 3'}>Lựa chọn 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            
        </React.Fragment>
    );
}
export default CoQuanThucHien;