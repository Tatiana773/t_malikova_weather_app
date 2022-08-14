import React, { useState, } from 'react';
import { useSelector } from 'react-redux';
import { selectForecastDays, selectRealCity } from "../../../Store/Home/selectors";
import { ForecastDayComponent } from './ForecastDayComponent';
import "../City/CityPage.css"

export const ForecastComponent = () =>{
    const city = useSelector(selectRealCity);
    const forecastDays = useSelector(selectForecastDays);
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <div>
            <h1 className='name'>{city.name}</h1>
            {forecastDays.map((day) => <ForecastDayComponent
            key = {day.date}
            day = {day}
            expanded = {expanded}
            onHandleChange = {handleChange(day.date)}
            />)}
            
        </div>
    )
}


