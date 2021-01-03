import axios from 'axios';

export const changeText = (newCity) => ({
  type: 'CHANGE_TEXT',
  payload: newCity
})

export const addWeather = (weather) => ({
  type: 'ADD_WEATHER',
  payload: weather
})

export const addError = (weather) => ({
  type: 'ADD_ERROR',
  payload: weather
})

export const fetchWeather = (nameCity) => (dispatch) => {
  dispatch(setLoading(false))
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&lang=ru&&units=metric&appid=ebe9e318496a0c50d405ead8cf00662c`)
    .then(({ data }) => {
      dispatch(addWeather(data))
    })
    .catch(error => dispatch(addError()));
}

export const setLoading = (value) => ({
  type: 'SET_LOADING',
  payload: value
})


