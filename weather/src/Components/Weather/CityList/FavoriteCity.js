import React, { useCallback}from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { updateCityAction } from '../../../Store/Home/actions'; 

export const FavouriteCityComponent = ({city, onDeleteCity}) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onDelete = useCallback(()=>onDeleteCity(city.id), [city.id, onDeleteCity]);
    const setCity = useCallback(()=>{
        dispatch(updateCityAction(city))
        navigate('/'+ city.name)
    }, [dispatch, city])
   
    return(
        <div>
            <ListItem
                secondaryAction={  
                <IconButton edge="end" aria-label="delete" onClick = {onDelete}>
                    <ClearIcon />
                </IconButton>
                }
            >
                <FavoriteBorderIcon />
                <ListItemText
                onClick = {setCity}
                primary={city.name}
                sx={{marginLeft:"10px"}}
                />
                
            </ListItem>
        </div>
    )
}
