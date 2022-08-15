import { 
    FETCH_DATA_ACTION_SUCCESS,
    FETCH_DATA_ACTION_REQUEST,
    FETCH_DATA_ACTION_FAILURE,
    UPDATE_CITY_ACTION,
    UPDATE_DATE_ACTION,
    SET_SYSTEM_ACTION,
    SET_LANG_ACTION,
    ADD_CITY_ACTION,
    DELETE_CITY_ACTION,
    FETCH_FORECAST_ACTION_SUCCESS,
    FETCH_FORECAST_ACTION_REQUEST,
    FETCH_FORECAST_ACTION_FAILURE,
    FETCH_HISTORY_ACTION_SUCCESS,
    FETCH_HISTORY_ACTION_REQUEST,
    FETCH_HISTORY_ACTION_FAILURE,
    FETCH_SPORT_ACTION_SUCCESS,
    FETCH_SPORT_ACTION_REQUEST,
    FETCH_SPORT_ACTION_FAILURE,
    ADD_SPORT_ACTION,
    DELETE_SPORT_ACTION,
    SET_THEME_ACTION,
} from "./actions";

const initialState = {
    items: [],
    areDataLoading: false,
    error: null,
    city: {},
    favouriteCities: [],
    date: "",
    forecast: {},
    history: {},
    sport: {},
    favouriteEvents: [],
    system: "",
    lang: "", 
    theme: "",
}

export const mainPageReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_DATA_ACTION_REQUEST: return{ ...state, areDataLoading: true, error: null};
        case FETCH_DATA_ACTION_SUCCESS: return {...state, items: action.data, areDataLoading: false};
        case FETCH_DATA_ACTION_FAILURE: return {...state, areDataLoading: false, error: action.error};
        case UPDATE_CITY_ACTION: return {...state, city: action.city, areDataLoading: false,};
        case ADD_CITY_ACTION: return{...state, favouriteCities: [...state.favouriteCities, action.city], areDataLoading: false,};
        case DELETE_CITY_ACTION: return{...state, areDataLoading: false, favouriteCities: state.favouriteCities.filter((item)=>item.id !== action.id)};
        case UPDATE_DATE_ACTION: return{...state, date: action.date, areDataLoading: false,};
        case FETCH_FORECAST_ACTION_REQUEST: return{ ...state, areDataLoading: true, error: null};
        case FETCH_FORECAST_ACTION_SUCCESS: return {...state, forecast: action.forecastData, areDataLoading: false};
        case FETCH_FORECAST_ACTION_FAILURE: return {...state, areDataLoading: false, error: action.error};
        case FETCH_HISTORY_ACTION_REQUEST: return{ ...state, areDataLoading: true, error: null};
        case FETCH_HISTORY_ACTION_SUCCESS: return {...state, history: action.historyData, areDataLoading: false};
        case FETCH_HISTORY_ACTION_FAILURE: return {...state, areDataLoading: false, error: action.error};
        case FETCH_SPORT_ACTION_REQUEST: return{ ...state, areDataLoading: true, error: null};
        case FETCH_SPORT_ACTION_SUCCESS: return {...state, sport: action.sportData, areDataLoading: false};
        case FETCH_SPORT_ACTION_FAILURE: return {...state, areDataLoading: false, error: action.error};
        case ADD_SPORT_ACTION: return{...state, areDataLoading: false, favouriteEvents: [...state.favouriteEvents, action.event]};
        case DELETE_SPORT_ACTION: return{...state, areDataLoading: false, favouriteEvents: state.favouriteEvents.filter((item)=>item.id !== action.id)};
        case SET_SYSTEM_ACTION: return{...state, areDataLoading: false, system: action.value};
        case SET_LANG_ACTION: return{...state, areDataLoading: false, lang: action.lang};
        case SET_THEME_ACTION: return{...state, areDataLoading: false, theme: action.theme};
        default: return state;
    }
}