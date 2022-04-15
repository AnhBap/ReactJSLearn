import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import {
    Grid,
    TextField,
    Container,
    CssBaseline,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    ListItem,
    ListItemText,
    List,

} from '@mui/material'
import Head from 'next/head'


function Weather({
    data,
    location,
    err
    }) {
    console.log(data)
    const router = useRouter();
    const handleLocation = (valLocation) => {
        const local = valLocation;
        router.push(`?q=${local} `);
        
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
                        {!err && data && (
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
                                    <Typography variant="body2" color="text.secondary" component="div">
                                        <List>
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
                                                                {Math.ceil(data.main.temp)} ° C
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
                                                                {Math.ceil(data.main.temp_min)} ° C
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
                                                                {Math.ceil(data.main.temp_max)} ° C
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
                                                                {data.weather[0].description}
                                                            </Typography>
                                                        </React.Fragment>
                                                    }
                                                />
                                            </ListItem>
                                        </List>
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

export const getServerSideProps = async ({ query }) => {
    const API_KEY = "1a811cb6a7e2f1b0647e5b2db4bed342";
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const location = query?.q || "Hà Nội";
    let err = false;
    const res = await fetch(
        `${API_URL}?q=${
            location || "Ha Noi"
        }&appid=${API_KEY}&units=metric&lang=vi`
      );
    const data = await res.json();
    if (data.cod === "404") {
        err = true;
    }

    return {
        props: {
            data,
            location,
            err
        },
    };
};
export default Weather;