let initialState = {
    weather: [],
    isLoaded: false,
    textarea: '',
    error: false
}

const weatherReducer = (state = initialState, action) => {
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