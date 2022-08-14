import React, { useEffect, useCallback, useState }from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchData } from "../../../Store/Home/thunks";
import { useDebounce } from "./UseDebounce";
import { useSelector, useDispatch } from "react-redux";
import { selectDataCities } from "../../../Store/Home/selectors"
import { updateCityAction } from "../../../Store/Home/actions"
import { useTranslation } from "react-i18next";
import "../../i18n";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import "./HomeComponent.css";

export const SearchCityComponent = () =>{

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataCities = useSelector(selectDataCities);

  const [searched, setSearched] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const cityQuery = searchParams.get("city") || "";
  const debouncedSearch = useDebounce(searched, 3000);
  
  const onSearch = useCallback((event)=> {
    setSearched(event.target.value);
  },[setSearched]);

  useEffect(() => {
    if (debouncedSearch) {
      if(searched){
      setSearchParams({city: searched || ""})
      dispatch(fetchData(searched));
      }
    }
  }, [debouncedSearch, searched, cityQuery]);

  const handleChange = useCallback((event, newValue) => {
    if(!newValue)return;
    setSearchParams({city: newValue.name});
    dispatch(updateCityAction(newValue));
    navigate("/"+ newValue.name);
  }, [dispatch, navigate, setSearchParams]);

  return(

  <div className="search">
    <Autocomplete
    disablePortal
    id="citySearch"
    options={dataCities}
    autoHighlight
    sx={{ width: 300, color: "white" }}
    getOptionLabel={(option) => option.name}
    isOptionEqualToValue = {(option, value) => option.name === value.name}
    onInput = {onSearch}
    onChange = {handleChange}
    renderOption={(props, option) => (
      <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props} key={option.id}>
        {option.name} ({option.region})
      </Box>
    )}
    renderInput={(params) => <TextField {...params}  label={t("inputs.city")} />}
  />
  </div>
  )
}