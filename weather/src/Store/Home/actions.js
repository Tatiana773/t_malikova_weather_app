export const FETCH_DATA_ACTION_REQUEST = "FETCH_DATA_ACTION_REQUEST";
export const FETCH_DATA_ACTION_SUCCESS = "FETCH_DATA_ACTION_SUCCESS";
export const FETCH_DATA_ACTION_FAILURE = "FETCH_DATA_ACTION_FAILURE";

export const FETCH_FORECAST_ACTION_REQUEST = "FETCH_FORECAST_ACTION_REQUEST";
export const FETCH_FORECAST_ACTION_SUCCESS = "FETCH_FORECAST_ACTION_SUCCESS";
export const FETCH_FORECAST_ACTION_FAILURE = "FETCH_FORECAST_ACTION_FAILURE";

export const FETCH_HISTORY_ACTION_REQUEST = "FETCH_HISTORY_ACTION_REQUEST";
export const FETCH_HISTORY_ACTION_SUCCESS = "FETCH_HISTORY_ACTION_SUCCESS";
export const FETCH_HISTORY_ACTION_FAILURE = "FETCH_HISTORY_ACTION_FAILURE";

export const FETCH_SPORT_ACTION_REQUEST = "FETCH_SPORT_ACTION_REQUEST";
export const FETCH_SPORT_ACTION_SUCCESS = "FETCH_SPORT_ACTION_SUCCESS";
export const FETCH_SPORT_ACTION_FAILURE = "FETCH_SPORT_ACTION_FAILURE";

export const UPDATE_CITY_ACTION = "UPDATE_CITY_ACTION";
export const ADD_CITY_ACTION = "ADD_CITY_ACTION";
export const DELETE_CITY_ACTION = "DELETE_CITY_ACTION";

export const UPDATE_DATE_ACTION = "UPDATE_DATE_ACTION";
export const UPDATE_PAST_DATE_ACTION = "UPDATE_PAST_DATE_ACTION";

export const ADD_SPORT_ACTION = "ADD_SPORT_ACTION";
export const DELETE_SPORT_ACTION = "DELETE_SPORT_ACTION";

export const SET_SYSTEM_ACTION = "SET_SYSTEM_ACTION";
export const SET_LANG_ACTION = "SET_LANG_ACTION";
export const SET_THEME_ACTION = "SET_THEME_ACTION";

export const fetchDataRequest = () => {
    return{
        type: FETCH_DATA_ACTION_REQUEST,
    }
}

export const fetchDataSuccess = (data) => {
    return{
        type: FETCH_DATA_ACTION_SUCCESS,
        data,
    }
}

export const fetchDataFailure = (error) => {
    return{
        type: FETCH_DATA_ACTION_FAILURE,
        error,
    }
}

export const updateCityAction = (city) => {
    return{
        type: UPDATE_CITY_ACTION,
        city,
    }
}

export const updateDateAction = (date) => {
    return{
        type: UPDATE_DATE_ACTION,
        date,
    }
}

export const updatePastDateAction = (date) => {
    return{
        type: UPDATE_PAST_DATE_ACTION,
        date,
    }
}

export const addCityAction = (city) => {
    return{
        type: ADD_CITY_ACTION,
        city,
    }
}
export const deleteCityAction = (id) => {
    return{
        type: DELETE_CITY_ACTION,
        id,
    }
}
export const fetchForecastRequest = () => {
    return{
        type: FETCH_FORECAST_ACTION_REQUEST,
    }
}

export const fetchForecastSuccess = (forecastData) => {
    return{
        type: FETCH_FORECAST_ACTION_SUCCESS,
        forecastData,
    }
}

export const fetchForecastFailure = (error) => {
    return{
        type: FETCH_FORECAST_ACTION_FAILURE,
        error,
    }
}

export const fetchHistoryRequest = () => {
    return{
        type: FETCH_HISTORY_ACTION_REQUEST,
    }
}

export const fetchHistorySuccess = (historyData) => {
    return{
        type: FETCH_HISTORY_ACTION_SUCCESS,
        historyData,
    }
}

export const fetchHistoryFailure = (error) => {
    return{
        type: FETCH_HISTORY_ACTION_FAILURE,
        error,
    }
}

export const fetchSportRequest = () => {
    return{
        type: FETCH_SPORT_ACTION_REQUEST,
    }
}

export const fetchSportSuccess = (sportData) => {
    return{
        type: FETCH_SPORT_ACTION_SUCCESS,
        sportData,
    }
}

export const fetchSportFailure = (error) => {
    return{
        type: FETCH_SPORT_ACTION_FAILURE,
        error,
    }
}

export const addSportAction = (event) => {
    return{
        type: ADD_SPORT_ACTION,
        event,
    }
}

export const deleteSportAction = (id) => {
    return{
        type: DELETE_SPORT_ACTION,
        id,
    }
}

export const setSystemAction = (value)=>{
    return{
        type: SET_SYSTEM_ACTION,
        value,
    }
}

export const setLangAction = (lang)=>{
    return{
        type: SET_LANG_ACTION,
        lang,
    }
}

export const setThemeAction = (theme)=>{
    return{
        type: SET_THEME_ACTION,
        theme,
    }
}
