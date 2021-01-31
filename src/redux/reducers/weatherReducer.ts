import { weatherActionType } from "../action/weatherAction"

type initialStateType = {
    weather: weatherType | null
    isLoaded: boolean
    textarea: string
    error: boolean
}

type coordType = {
    lon: number
    lat: number
}

type miniWeatherType = {
    id: number
    main: string
    description: string
    icon: string
}

type mainType = {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}

type windType = {
    speed: number
    deg: number
}

type snowType = {
    [key: string]: number
}

type cloudsType = {
    all: number
}

type sysType = {
    country: string
    sunrise: number
    sunset: number
}

export type weatherType = {
    coord: coordType
    weather: Array<miniWeatherType>
    base: string
    main: mainType
    visibility: number,
    wind: windType
    snow: snowType
    clouds: cloudsType
    dt: number,
    sys: sysType
    timezone: number,
    id: number,
    name: string,
    cod: number
}

let initialState: initialStateType = {
    weather: null,  
    isLoaded: false,
    textarea: '',
    error: false
}

const weatherReducer = (state = initialState, action: weatherActionType): initialStateType => {
    switch (action.type) {
        case 'ADD_WEATHER':
            return {
                ...state,
                weather: action.payload,
                isLoaded: true,
                textarea: ''
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoaded: action.payload,
                error: false
            }
        case 'ADD_ERROR':
            return {
                ...state,
                weather: null,
                isLoaded: true,
                error: true
            }
        case 'CHANGE_TEXT':
            return {
                ...state,
                textarea: action.payload
            };
        default:
            return state
    }
}

export default weatherReducer;