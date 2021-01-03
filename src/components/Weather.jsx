import React from 'react';
import WeatherInfo from './WeatherInfo';

const Weather = (props) => {
      
    return (
        <div>
       
            {!props.isLoaded ? '' : <WeatherInfo info={props.weather}/>}
           
        </div>
    )

 }

export default Weather;
