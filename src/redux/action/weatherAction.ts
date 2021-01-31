import axios from 'axios';
import { Dispatch } from 'redux';
import { weatherType } from '../reducers/weatherReducer';

const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_WEATHER = 'ADD_WEATHER'
const ADD_ERROR = 'ADD_ERROR'
const SET_LOADING = 'SET_LOADING'

export type weatherActionType = changeTextType | addWeatherType | addErrorType | setLoadingType

type changeTextType = {
  type: typeof CHANGE_TEXT
  payload: string
}

type addWeatherType = {
  type: typeof ADD_WEATHER
  payload:  weatherType
}

type addErrorType = {
  type: typeof ADD_ERROR
}

type setLoadingType = {
  type: typeof SET_LOADING,
  payload: boolean
}
export const changeText = (newCity: string): changeTextType => ({
  type: CHANGE_TEXT,
  payload: newCity
})

export const addError = (): addErrorType => ({
  type: ADD_ERROR
})


export const addWeather = (weather: weatherType ): addWeatherType => ({
  type: ADD_WEATHER,
  payload: weather
})

export const fetchWeather = (nameCity: string) => (dispatch: Dispatch<weatherActionType>) => {
  dispatch(setLoading(false))
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&lang=ru&&units=metric&appid=ebe9e318496a0c50d405ead8cf00662c`)
    .then(({ data }) => {
      dispatch(addWeather(data))
    })
    .catch(error => dispatch(addError()));
}

export const setLoading = (value: boolean): setLoadingType => ({
  type: SET_LOADING,
  payload: value
})


