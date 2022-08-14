import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useTranslation } from 'react-i18next';
import "../i18n";
import "./LoginComponent.css";

export const PasswordInputComponent = ({id, value, handleChange, error}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
 
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return(
    <FormControl sx={{ m: 1, width: "26ch" }} variant="outlined" >
     <InputLabel htmlFor="outlined-adornment-password">{t("account.password")}</InputLabel>
        <OutlinedInput
          id={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={handleChange}
          error = {error}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={t("account.password")}
        />
    </FormControl>
  )
}