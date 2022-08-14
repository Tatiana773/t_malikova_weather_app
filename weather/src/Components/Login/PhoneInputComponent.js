import React, {forwardRef, useState} from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTranslation } from "react-i18next";
import "../i18n";

const TextMaskCustom = forwardRef(function TextMaskCustom (props, ref) {
    const { onChange, ...other } = props;
  return (
    <IMaskInput
        {...other}
        mask="+#0 (000) 000-0000"
        definitions={{
        "#": /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


export const PhoneInputComponent = ({id, error, onTelChange}) => {

  const { t } = useTranslation();

  const [values, setValues] = useState({
    textmask: "+__ (___) ___-____",
    numberformat: "1320",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (

    <FormControl >
      <InputLabel htmlFor="tel">Phone</InputLabel>
      <OutlinedInput
        label={t("account.tel")}
        autoComplete="phone"
        value={values.textmask}
        onChange={handleChange}
        onBlur = {onTelChange}
        name="textmask"
        error = {error}
        id={id}
        inputComponent={TextMaskCustom}
      />
    </FormControl>

  );
}
