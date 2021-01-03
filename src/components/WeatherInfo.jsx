import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
  
} from '@fortawesome/free-solid-svg-icons';


const WeatherInfo = (props) => {
    const sunrise = new Date(props.info.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);
    const sunset = new Date(props.info.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);

    let weatherIcon = null;

  if (props.info.weather[0].main === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (props.info.weather[0].main === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (props.info.weather[0].main === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (props.info.weather[0].main === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (props.info.weather[0].main === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (props.info.weather[0].main === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

    return (
        <>
            <div className="weather__city">
                <h3>{props.info.name}, {props.info.sys.country}</h3>
            </div>
            <div className="weather">
                <div className="weather__degree">
                    <div className="weather__degree__svg">
                    <div className="svg">
                    {weatherIcon}
                    </div>
                    
            </div>
                    <div className="weather__degree__numb">
                        <h3>{Math.floor(props.info.main.temp)}°</h3>
                        <h4>{props.info.weather[0].description}</h4>
                    </div>
                </div>
                <div className="weather__info">
                    <div className="weather__info__item">
                        <h3>{Math.floor(props.info.main.temp_max)}°</h3>
                        <h4>Максимум</h4>
                    </div>
                    <div className="weather__info__item">
                        <h3>{props.info.wind.speed} миль/ч</h3>
                        <h4>Ветер</h4>
                    </div>
                    <div className="weather__info__item">
                        <h3>{sunrise}</h3>
                        <h4>Восход</h4>
                    </div>
                    <div className="weather__info__item">
                        <h3>{Math.floor(props.info.main.temp_min)}°</h3>
                        <h4>Минимум</h4>
                    </div>
                    <div className="weather__info__item">
                        <h3>{props.info.main.humidity} %</h3>
                        <h4>Влажность</h4>
                    </div>
                    <div className="weather__info__item">
                        <h3>{sunset}</h3>
                        <h4>Заход</h4>
                    </div>
                </div>
            </div>
        </>
    )

}

export default WeatherInfo;
