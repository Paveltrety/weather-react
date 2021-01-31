import React, { memo } from 'react';
import { weatherType } from '../redux/reducers/weatherReducer';
import WeatherInfo from './WeatherInfo';
type propsType = {
    isLoaded: boolean
    weather:  weatherType | null
}

const Weather: React.FC<propsType> = (props) => {
    return (
        <>
            {!props.isLoaded ? '' : <WeatherInfo weather={props.weather}/>}
        </>
    )
 }

export default memo(Weather);
