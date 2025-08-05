import { useState } from "react";
import InfoBox from "./InfoBox";
import Search from "./Search";


export default function WeatherApp()
{
    const [weatherInfo,setWeatherInfo] = useState({
        // city: "Delhi",
        // description: "overcase clouds",
        // feelslike: 26.4,
        // humidity: 69,
        // temp: 26.4,
        // tempmax: 26.4,
        // tempmin: 26.4
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    
    return(
        <div className="outer-container" style={{textAlign: "center"}}>
            <h1>Weather App By ShabbyH1</h1>
            <Search updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}