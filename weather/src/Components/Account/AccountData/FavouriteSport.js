import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SportsSoccerRoundedIcon from '@mui/icons-material/SportsSoccerRounded';


export const FavouriteSportComponent = ({item, onDeleteEvent}) => {
    const onDelete = useCallback(()=>onDeleteEvent(item.id), [item.id, onDeleteEvent]);
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <ListItem
            secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick = {onDelete}>
                <DeleteIcon />
            </IconButton>
            }
        >
            <ListItemAvatar>
            <Avatar>
                <SportsSoccerRoundedIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary={item.match}
            secondary={item.start}
            />
        </ListItem>
    </Box>
  );
}
