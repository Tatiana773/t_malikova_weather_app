import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { selectSport } from '../../../Store/Home/selectors';
import { SportCardComponent } from './SportCard';
import Grid from '@mui/material/Grid';
import './Sport.css';
import { useTranslation } from 'react-i18next';
import "../../i18n";

export const SportEventsComponent =() =>{
    const sport = useSelector(selectSport);
    const { t } = useTranslation();

    return(
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {sport.football.map((item) => (
            item.id = uuidv4(),
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <SportCardComponent
                item = {item}
                title = {t("sport.footbal")}
                name = {item.tournament}
                match = {item.match}
                place = {item.stadium}
                country = {item.country}
                date = {item.start}

            />
          </Grid>
        ))}
        {sport.cricket.map((item) => (
            item.id = uuidv4(),
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <SportCardComponent
                item = {item}
                title = {t("sport.cricket")}
                name = {item.tournament}
                match = {item.match}
                place = {item.stadium}
                country = {item.country}
                date = {item.start}
             
            />
          </Grid>
        ))}
        {sport.golf.map((item) => (
            item.id = uuidv4(),
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <SportCardComponent
                item = {item}
                title = {t("sport.golf")}
                name = {item.tournament}
                match = {item.match}
                place = {item.stadium}
                country = {item.country}
                date = {item.start}
                
            />
          </Grid>
        ))}
      </Grid>
    )
}