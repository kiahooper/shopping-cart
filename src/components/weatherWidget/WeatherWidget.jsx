import React from 'react'
import { useState, useEffect } from 'react';
import { api_key } from './api';
import './weatherWidget.scss';

export const WeatherWidget = () => {

    const [loading, setLoading] = useState(true);
    const [icon, setIcon] = useState("");
    const [temp, setTemp] = useState(0);

    useEffect(() => {
        getWeather()
    }, [])

    async function getWeather() {
        try {
          const location = await getLocation();
          const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?${location}&APPID=${api_key}&units=metric`,
              { mode: "cors" }
          );
          const responseData = await response.json();
          setIcon(responseData.weather[0].icon);
          setTemp(responseData.main.temp);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }     
      };

    async function getLocation() { 
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      }

    return (
        <div className="weather">
          <div className={ loading ? "loading" : "loading not-active" }>
            <span>Loading weather...</span>
          </div>
          <div className={ loading ? "info" : "info active"}>
            <img src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.png`}></img>
            <span className="numbers">{temp}°C</span>
          </div> 
        </div>
    )
}
