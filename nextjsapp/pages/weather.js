import React, {useEffect , useState} from 'react'
import { Grid, TextField ,Container, CssBaseline } from '@mui/material'
import Head from 'next/head'
import axios from 'axios';

function Weather({ dataLocation,location_q }) {
    const [location,setLocation] = useState("Hà Nội");
    const [results,setresults] = useState([]);
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
        await axios.get(API_URL, { params: { q: location , appid: API_KEY, lang:"vi", units: "metric" } })
        .then(function (response) {
            console.log(response.data);
            const {data} = response;
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
    const handleLocation = (valLocation) =>{
        setLocation(valLocation);
        getWeatherInfo(location)
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
                    <Container fixed>
                        <Grid item  xs={12} md={12}>
                            <TextField fullWidth id="search-address" onBlur={evt=>handleLocation(evt.target.value)} label="Search address" variant="standard" />
                        </Grid>
                        {temp && (
                            <div className="mt-10 flex flex-col justify-start bg-indigo-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
                                <div className="flex mb-4">
                                    <p className="w-64 sm:w-41">Nhiệt độ:</p>
                                    <p>{temp} ° C</p>
                                </div>
                                <div className="flex mb-4 sm:w-41">
                                    <p className="w-64">Nhiệt độ thấp nhất:</p>
                                    <p>{minTemp}° C</p>
                                </div>
                                <div className="flex">
                                    <p className="w-64 sm:w-41">Nhiệt độ cao nhất:</p>
                                    <p>{maxTemp}° C</p>
                                </div>
                                <div className="flex">
                                    <p className="w-64 sm:w-41">Mô tả chung:</p>
                                    <p>{weather}</p>
                                </div>
                                
                            </div>
                        )}
                        {err && (
                            <div className="mt-10 bg-red-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
                                <p>Couldn't fetch weather results.</p>
                            </div>
                        )}
                    </Container>
                </React.Fragment>
            </main>
        </div>
    )
    
}


export default Weather;