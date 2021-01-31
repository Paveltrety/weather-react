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
import { weatherType } from '../redux/reducers/weatherReducer';
import Error from './Error';

type propsType = {
  weather: weatherType | null
}

const WeatherInfo: React.FC<propsType> = (props) => {
  if (props.weather === null) {
    return <Error />
  } else {
    const sunrise: string = new Date(props.weather.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);
    const sunset: string = new Date(props.weather.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
    let weatherIcon = null;

    switch (props.weather.weather[0].main) {
      case 'Thunderstorm':
        weatherIcon = <FontAwesomeIcon icon={faBolt} />
        break
      case 'Drizzle':
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} />
        break
      case 'Rain':
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />
        break
      case 'Snow':
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} />
        break
      case 'Clear':
        weatherIcon = <FontAwesomeIcon icon={faSun} />
        break
      case 'Clouds':
        weatherIcon = <FontAwesomeIcon icon={faCloud} />
        break
      default:
        weatherIcon = <FontAwesomeIcon icon={faSmog} />
    }

    return (
      <>
        <div className="weather__city">
          <h3>{props.weather.name}, {props.weather.sys.country}</h3>
        </div>
        <div className="weather">
          <div className="weather__degree">
            <div className="weather__degree__svg">
              <div className="svg">
                {weatherIcon}
              </div>
            </div>
            <div className="weather__degree__numb">
              <h3>{Math.floor(props.weather.main.temp)}°</h3>
              <h4>{props.weather.weather[0].description}</h4>
            </div>
          </div>
          <div className="weather__info">
            <div className="weather__info__item">
              <h3>{Math.floor(props.weather.main.temp_max)}°</h3>
              <h4>Максимум</h4>
            </div>
            <div className="weather__info__item">
              <h3>{props.weather.wind.speed} миль/ч</h3>
              <h4>Ветер</h4>
            </div>
            <div className="weather__info__item">
              <h3>{sunrise}</h3>
              <h4>Восход</h4>
            </div>
            <div className="weather__info__item">
              <h3>{Math.floor(props.weather.main.temp_min)}°</h3>
              <h4>Минимум</h4>
            </div>
            <div className="weather__info__item">
              <h3>{props.weather.main.humidity} %</h3>
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
}

export default WeatherInfo;
