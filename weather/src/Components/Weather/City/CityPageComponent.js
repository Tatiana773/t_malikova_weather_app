import React, { useEffect, useCallback, useState, } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { fetchForecast, fetchSport, fetchHistory } from "../../../Store/Home/thunks";
import { addCityAction, updateCityAction, updateDateAction } from "../../../Store/Home/actions";
import { selectCity, selectFavouriteCities, selectForecast, selectSystem } from "../../../Store/Home/selectors";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { Message } from "../../Message/Message";
import Button from "@mui/material/Button";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacitySharpIcon from "@mui/icons-material/OpacitySharp";
import AirSharpIcon from "@mui/icons-material/AirSharp";
import "./CityPage.css";

export const CityPageComponent = () =>{
    
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const city = useSelector(selectCity);
    const favoriteCities = useSelector(selectFavouriteCities);
    const forecast = useSelector(selectForecast);
    const system = useSelector(selectSystem);

    const [currentDate] = useState(new Date().toISOString().slice(0, 10));
    const [showMessage, setShowMessage] = useState(false);
    
    
    useEffect(()=>{
        dispatch(updateDateAction(currentDate))
    },[dispatch, currentDate]);

    useEffect(()=>{
        if(city.id){
            dispatch(fetchForecast(city.name +"%20"+city.region+"&days=3"));
            dispatch(fetchHistory(city.name +"%20"+city.region +"&dt=" + currentDate + "&lang=en"));
            dispatch(fetchSport(city.name));
        }else{
            if(favoriteCities.length){
                dispatch(updateCityAction(favoriteCities[0]));
                dispatch(fetchForecast(favoriteCities[0].name +"%20"+favoriteCities[0].region+"&days=3"));
                dispatch(fetchHistory(favoriteCities[0].name +"%20"+favoriteCities[0].region +"&dt=" + currentDate + "&lang=en"));
                dispatch(fetchSport(favoriteCities[0].name));
            }else{
            alert(t("messages.choose city"))
            }
        }
    },[dispatch, city, favoriteCities, currentDate, t]);

    const onAddFavouriteCity = useCallback(()=>{
        if(!city.id) return;
        if(favoriteCities.find((item) =>item.id === city?.id)){
            setShowMessage(true);
        } else{
            dispatch(addCityAction(city));
        }
    }, [dispatch, favoriteCities, city, t]);

    const onGoForecast = useCallback(()=>{
        navigate("/forecast/" + city?.name);
    }, [navigate, city?.name]);

    const onGoHistory = useCallback(()=>{
        navigate("/history/"+ city?.name + "/" + currentDate);
    }, [navigate, city?.name, currentDate]);

    const onGoSport = useCallback(()=>{
        navigate("/sport/"+ city?.name);
    }, [navigate, city?.name]);

    return(

        <div className="container">
            <div className="buttons">
                <Button className="city" 
                    variant="text"
                    size="large"
                    onClick = {onGoForecast}>
                        {t("city.btns.forecast")}
                </Button>
                <Button className="city"
                    variant="text"
                    size="large"
                    onClick = {onGoHistory}>
                        {t("city.btns.history")}
                </Button>
                <Button className="city"
                    variant="text"
                    size="large"
                    onClick = {onGoSport}>
                        {t("city.btns.sport")}
                </Button>
            </div>
            <div className="city info">
                <div >
                    {showMessage? <Message message = {t("messages.city in list")} />: null}
                    <div className="cityButton">
                        <h1 className="name">{city?.name}</h1>
                        <Button variant="outlined"
                            onClick = {onAddFavouriteCity}>
                                {t("city.btns.add to favorites")}
                        </Button>
                    </div>
                    <p >{city?.region} {city?.country} </p>
                    <p>{t("city.latitude")} {city?.lat} {t("city.longtitude")} {city?.lon}</p>
                </div>
                <div>
                    <div className="temperature">
                        <div className="temperature">
                            <p>{forecast?.condition.text}</p>
                            <img src={forecast?.condition.icon} alt = "condition"/>
                        </div>
                        <DeviceThermostatIcon/>
                        <h2>{system === "Metric"? forecast?.temp_c: forecast?.temp_f}</h2>
                    </div>   
                    <div>
                        <p><OpacitySharpIcon/> {forecast?.humidity}</p>
                        <p><AirSharpIcon/> {system === "Metric"? forecast?.wind_kph: forecast?.wind_mph}, {forecast?.wind_dir}</p>
                        <p>{t("city.feels like")} {system === "Metric"? forecast?.feelslike_c: forecast?.feelslike_f}</p>
                        <p>{t("city.last updated")}: {forecast?.last_updated}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}