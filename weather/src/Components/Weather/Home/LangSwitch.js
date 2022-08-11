import React, { useState, useCallback } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import "../../i18n";
import { changeLanguage } from 'i18next';

export const LangSwitch = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState("ua");
  const changeLanguage = useCallback((event) => {
    setLang(event.target.value)
    i18n.changeLanguage(event.target.value)
  },[]) 

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="lang">{t("inputs.lang")}</InputLabel>
      <Select
        labelId="lang"
        id="lang"
        value={lang}
        label={t("inputs.lang")}
        onChange={changeLanguage}
      >
        <MenuItem value={"en"}>En</MenuItem>
        <MenuItem value={"ua"}>Ua</MenuItem>
      </Select>
    </FormControl>
  );
}
