import { useState } from "react"
import InfoBox from "./infoBox"
import SearchBox from "./searchBox"
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 301.38,
        temp: 301.2,
        tempMin: 301.2,
        tempMax: 301.2,
        humidity: 47,
        weather: "haze",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center"}}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}