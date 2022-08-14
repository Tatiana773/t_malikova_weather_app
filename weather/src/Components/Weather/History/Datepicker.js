import React from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import "../City/CityPage.css";

export const ViewsDatePicker = ({value, onChangeDate,}) => {

  const { t } = useTranslation();

  return (
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack className = "calendar"spacing={1}>
        <DatePicker
          views={["day"]}
          label={t("inputs.date")}
          value= {value}
          onChange={onChangeDate}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
