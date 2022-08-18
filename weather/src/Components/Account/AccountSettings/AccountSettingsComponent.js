import React, { useCallback, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSystemAction } from "../../../Store/Home/actions";
import { selectSystem } from "../../../Store/Home/selectors";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Radio from "@mui/material/Radio";
import { Typography } from "@mui/material";
import "./AccountSettings.css";

export const AccountSettingsComponent = () =>{
    
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const system = useSelector(selectSystem);
    
    const [selectedValue, setSelectedValue] = useState(system || "Metric");
    
    const handleChange = useCallback((event) => {
        setSelectedValue(event.target.value);
    },[setSelectedValue]);

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: "color-radio-button-demo",
        inputProps: { "aria-label": item },
    });

    useEffect(()=>{
        dispatch(setSystemAction(selectedValue));
    },[dispatch, selectedValue]);

    return(
        <div className="radioGroup">
            <div className="radio">
                <Radio {...controlProps("Metric")}/>
                <Typography>{t("header.metric")}</Typography>
            </div>
            <div className="radio">
                <Radio {...controlProps("Imperial")}/>
                <Typography>{t("header.imperial")}</Typography>
            </div>
        </div>
    )
}