import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css';
import { useState } from 'react';

export default function Search({updateInfo})
{
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "c33fe5e22a0107e47c5c89bedc1359fd";

    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse =await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempmax: jsonResponse.main.temp_max,
            tempmin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            description: jsonResponse.weather[0].description,
        }
        console.log(result)
        return result;
        }catch(err){
        throw err;
        }
    }
    let handleInputChange = (event) => {
        setCity(event.target.value)
    }
    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
        setError(true);
        }
    }
    return(
        <div className='Search'>
            <form onSubmit={handleSubmit}>
                <TextField className='search-bar' onChange={handleInputChange} id="outlined-basic" label="Search City" variant="outlined" value={city} name='city' required />
                <br /><br />
                <Button type='submit' variant="contained" size="large">Search</Button>
                <p style={{color:"red"}}>{error && "no such place exist in our API!"}</p>
            </form>
        </div>
    )
}