import { 
    fetchDataRequest, 
    fetchDataSuccess, 
    fetchDataFailure,
    fetchForecastRequest, 
    fetchForecastSuccess, 
    fetchForecastFailure,
    fetchHistoryRequest, 
    fetchHistorySuccess, 
    fetchHistoryFailure,
    fetchSportRequest, 
    fetchSportSuccess, 
    fetchSportFailure,
} from "./actions";
import { getData } 
from "../../Service/weatherApiProvider";

const searchUrl = "search.json?q=";

export const fetchData = (query) => {
    return async(dispatch) => {
        dispatch(fetchDataRequest());
        try{
            const responce = await getData(searchUrl + query);
            dispatch(fetchDataSuccess(responce));
        }
        catch(error){
            dispatch(fetchDataFailure(error.message));
        }
    }
} 

const forecastUrl = "forecast.json?q=";
export const fetchForecast = (query) => {
    return async(dispatch) => {
        dispatch(fetchForecastRequest());
        try{
            const responce = await getData(forecastUrl + query);
            dispatch(fetchForecastSuccess(responce));
        }
        catch(error){
            dispatch(fetchForecastFailure(error.message));
        }
    }
} 

const historyUrl = "history.json?q=";
export const fetchHistory = (query) => {
    return async(dispatch) => {
        dispatch(fetchHistoryRequest());
        try{
            const responce = await getData(historyUrl + query);
            dispatch(fetchHistorySuccess(responce));
        }
        catch(error){
            dispatch(fetchHistoryFailure(error.message));
        }
    }
} 

const sportUrl = "sports.json?q=";
export const fetchSport = (query) => {
    return async(dispatch) => {
        dispatch(fetchSportRequest());
        try{
            const responce = await getData(sportUrl + query)
            dispatch(fetchSportSuccess(responce));
        }
        catch(error){
            dispatch(fetchSportFailure(error.message));
        }
    }
} 


