import React from 'react';
import { useSelector } from 'react-redux';
import { selectCity } from '../../../Store/Home/selectors';
import './HomeComponent.css';
import { CityPageComponent } from '../City/CityPageComponent';
import { FavouriteCitiesListComponent } from '../CityList/FavouriteCitiesList';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "../../i18n";




export const HomePageComponent = () =>{
    const city = useSelector(selectCity);
    const { t } = useTranslation();
    return(
        <div className='mainInfo'>
            {city.id?<CityPageComponent/>:<Typography variant = "h4">{t("home.welcome")}</Typography>}
            
            <FavouriteCitiesListComponent/>
        </div>
        
    )
}