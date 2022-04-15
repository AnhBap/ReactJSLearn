import React, { useEffect, useState } from 'react'
import {
    Grid,
    TextField,
    Container,
    CssBaseline ,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions ,
    ListItem,
    ListItemText,

} from '@mui/material'
import Head from 'next/head'
import axios from 'axios';

function Weather({ dataLocation, location_q }) {
    const [location, setLocation] = useState("Hà Nội");
    const [results, setresults] = useState([]);
    const [temp, setTemp] = useState(null);
    const [minTemp, setMinTemp] = useState('');
    const [maxTemp, setMaxTemp] = useState('');
    const [weather, setweather] = useState('');
    const [err, setErr] = useState(false);
    const API_KEY = "1a811cb6a7e2f1b0647e5b2db4bed342";
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const getWeatherInfo = async (location) => {
        setErr(false);
        setTemp(null);
        await axios.get(API_URL, { params: { q: location, appid: API_KEY, lang: "vi", units: "metric" } })
            .then(function (response) {
                console.log(response.data);
                const { data } = response;
                const newTemp = Math.ceil(data.main.temp);
                const newMinTemp = Math.ceil(data.main.temp_min);
                const newMaxTemp = Math.ceil(data.main.temp_max);
                const description = data.weather[0].description;
                setTemp(newTemp);
                setMinTemp(newMinTemp);
                setMaxTemp(newMaxTemp);
                setweather(description);
            })
            .catch(function (error) {
                console.error(error);
                setErr(true);
            });
    };
    const handleLocation = (valLocation) => {
        const local = valLocation;
        setLocation(local);
        getWeatherInfo(local)
    }



    return (
        <div>
            <Head>
                <title>Dự báo thời tiết</title>
                <meta name="description" content="Dự báo thời tiết" />
                <link rel="icon" href="./favicon" />
            </Head>

            <main>

                <React.Fragment>
                    <CssBaseline />
                    <Container fixed sx={{ marginTop: '30px' }}>
                        <Grid item xs={12} md={12}>
                            <TextField fullWidth id="search-address" onBlur={evt => handleLocation(evt.target.value)} label="Thành phố" variant="standard" />
                        </Grid>
                        {temp && (
                            <Card fullWidth sx={{ marginTop: '30px' }}>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <ListItem alignItems="flex-start">
                                        <ListItemText
                                            primary="Nhiệt độ:"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {temp} ° C
                                                </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                        <ListItemText
                                            primary="Nhiệt độ thấp nhất:"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {minTemp} ° C
                                                </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                        <ListItemText
                                            primary="Nhiệt độ cao nhất:"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {maxTemp} ° C
                                                </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                        <ListItemText
                                            primary="Mô tả chung:"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {weather}
                                                </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                </Typography>
                                </CardContent>
                                <CardActions>
                                </CardActions>
                            </Card>
                        )}
     
                     
                        {err && (
                            <div className="mt-10 bg-red-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
                                <p>Không tìm thấy.</p>
                            </div>
                        )}
                    </Container>
                </React.Fragment>
            </main>
        </div>
    )

}


export default Weather;