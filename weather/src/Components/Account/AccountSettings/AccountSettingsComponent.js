import React, { useCallback, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { setSystemAction } from "../../../Store/Home/actions";
import Radio from "@mui/material/Radio";
import { Typography } from "@mui/material";
import "./AccountSettings.css";

export const AccountSettingsComponent = () =>{
    
    const dispatch = useDispatch()
    
    const [selectedValue, setSelectedValue] = useState("Metric");
    
    const handleChange = useCallback((event) => {
        setSelectedValue(event.target.value)
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
                <Typography>Metric</Typography>
            </div>
            <div className="radio">
                <Radio {...controlProps("Imperial")}/>
                <Typography>Imperial</Typography>
            </div>
        </div>
    )
}