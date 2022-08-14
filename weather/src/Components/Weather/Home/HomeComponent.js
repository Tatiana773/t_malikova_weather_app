import React from "react";
import { useSelector } from "react-redux";
import { selectCity } from "../../../Store/Home/selectors";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { CityPageComponent } from "../City/CityPageComponent";
import { FavouriteCitiesListComponent } from "../CityList/FavouriteCitiesList";
import { Typography } from "@mui/material";
import "./HomeComponent.css";

export const HomePageComponent = () =>{

    const city = useSelector(selectCity);
    const { t } = useTranslation();

    return(
        
        <div className="home">
            {city.id? 
            <div className="mainInfo">
                <CityPageComponent/>
                <FavouriteCitiesListComponent/>
            </div>:
            <Typography className="welcome" variant = "h4">{t("home.welcome")}</Typography>}
        </div>
    )
}