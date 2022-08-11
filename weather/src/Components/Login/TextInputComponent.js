import React from "react";
import TextField from "@mui/material/TextField";

export const TextInput = ({id, label, error, onTextFieldChange, hint}) =>{

    return(
        <TextField
            required
            id={id}
            label={label}
            autoComplete={label}
            onBlur = {onTextFieldChange}
            error = {error}
            helperText={error? label + hint : label}
        />
    ) 
}