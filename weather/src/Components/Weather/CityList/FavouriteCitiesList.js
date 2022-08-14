import React, { useCallback, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavouriteCities } from '../../../Store/Home/selectors';
import { FavouriteCityComponent } from './FavoriteCity';
import { deleteCityAction } from '../../../Store/Home/actions';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import "../../i18n";
import "../City/CityPage.css";



export const FavouriteCitiesListComponent = () =>{
  const favoriteCities = useSelector(selectFavouriteCities);
  const dispatch = useDispatch();
  const [dense, setDense] = useState(false);
  const { t } = useTranslation();
  const onRemoveCity = useCallback ((id)=>dispatch(deleteCityAction(id)),[dispatch]);

  return(
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div" >
        {t("city.favourite cities")}
      </Typography>
      { favoriteCities.length?
      <List dense={dense} className='city'>
        {favoriteCities.map((city) => <FavouriteCityComponent
        key={city.id}
        city={city} 
        onDeleteCity= {onRemoveCity}
        />)}
      </List>:
      <p>{t("messages.list is empty")}</p> }
    </Grid>
  )
}
