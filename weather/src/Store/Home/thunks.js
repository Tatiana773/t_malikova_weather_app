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


const baseUrl = 'https://weatherapi-com.p.rapidapi.com/search.json?q=';

export const fetchData = (query) => {
    return async(dispatch, getState) => {
        dispatch(fetchDataRequest());
        try{
            const responce = await fetch(baseUrl + query,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0710ea5e90mshca86e4a17dc80b7p1be137jsn4c802ffaca9c',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                  }
            })
            if(responce.ok){
                const data = await responce.json();
                
                dispatch(fetchDataSuccess(data));
            }else{
                dispatch(fetchDataFailure('Something went wrong'));
            }
        }
        catch(error){
            dispatch(fetchDataFailure(error.message));
        }
    }
} 

const forecastUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=';
export const fetchForecast = (restUrl) => {
    return async(dispatch, getState) => {
        dispatch(fetchForecastRequest());
        try{
            const responce = await fetch(forecastUrl + restUrl,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0710ea5e90mshca86e4a17dc80b7p1be137jsn4c802ffaca9c',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                  }
            })
            if(responce.ok){
                const forecastData = await responce.json();
                
                dispatch(fetchForecastSuccess(forecastData));
            }else{
                dispatch(fetchForecastFailure('Something went wrong'));
            }
        }
        catch(error){
            dispatch(fetchForecastFailure(error.message));
        }
    }
} 

const historyUrl = 'https://weatherapi-com.p.rapidapi.com/history.json?q=';
export const fetchHistory = (restUrl) => {
    return async(dispatch, getState) => {
        dispatch(fetchHistoryRequest());
        try{
            const responce = await fetch(historyUrl + restUrl,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0710ea5e90mshca86e4a17dc80b7p1be137jsn4c802ffaca9c',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                  }
            })
            if(responce.ok){
                const historyData = await responce.json();
                
                dispatch(fetchHistorySuccess(historyData));
            }else{
                dispatch(fetchHistoryFailure('Something went wrong'));
            }
        }
        catch(error){
            dispatch(fetchHistoryFailure(error.message));
        }
    }
} 

const sportUrl = 'https://weatherapi-com.p.rapidapi.com/sports.json?q=';

export const fetchSport = (restUrl) => {
    return async(dispatch, getState) => {
        dispatch(fetchSportRequest());
        try{
            const responce = await fetch(sportUrl + restUrl,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0710ea5e90mshca86e4a17dc80b7p1be137jsn4c802ffaca9c',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                  }
            })
            if(responce.ok){
                const sportData = await responce.json();
                
                dispatch(fetchSportSuccess(sportData));
            }else{
                dispatch(fetchSportFailure('Something went wrong'));
            }
        }
        catch(error){
            dispatch(fetchSportFailure(error.message));
        }
    }
} 


