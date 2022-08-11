import React, { useEffect, useCallback, useState, useMemo }from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './HomeComponent.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { fetchData } from '../../../Store/Home/thunks';
import { useDebounce } from './UseDebounce';
import { useSelector, useDispatch } from 'react-redux';
import { selectDataCities, selectCity } from '../../../Store/Home/selectors'
import { updateCityAction } from '../../../Store/Home/actions'
import { useTranslation } from 'react-i18next';
import "../../i18n";

export const SearchCityComponent = () =>{
  const [searched, setSearched] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const cityQuery = searchParams.get("city") || "";
  const { t } = useTranslation();
  const dataCities = useSelector(selectDataCities)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSearch = useCallback((event)=> {setSearched(event.target.value)},[setSearched]);
  const debouncedSearch = useDebounce(searched, 2000);

  useEffect(() => {
      if (debouncedSearch) {
        setSearchParams({city: searched || ""})
        dispatch(fetchData(searched));
      }
    }, [debouncedSearch, searched, cityQuery]);

    const handleChange = useCallback((event, newValue) => {
      if(!newValue)return;
      setSearchParams({city: newValue.name})
      dispatch(updateCityAction(newValue))
      navigate('/'+ newValue.name)
    }, [dispatch, navigate, setSearchParams]);
    
  const town = useSelector(selectCity)
  return(
      <div className='search'>
          <Autocomplete
          disablePortal
          id="citySearch"
          options={dataCities}
          autoHighlight
          sx={{ width: 300, color: 'white' }}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue = {(option, value) => option.name === value.name}
          onInput = {onSearch}
          onChange = {handleChange}
          renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} key={option.id}>
                {option.name} ({option.region})
              </Box>
            )}
          renderInput={(params) => <TextField {...params}  label={t("inputs.city")} />}
      />
      </div>
  )
}