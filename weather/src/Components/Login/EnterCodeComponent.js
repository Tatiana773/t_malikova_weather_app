import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "./LoginComponent.css";
import { PasswordInputComponent } from "./PasswordInputComponent";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { setIsRegisteredAction, } from "../../Store/App/actions";
import { isValidCode } from "./FormSubmitHandler";
import { Message } from "../Message/Message";
import { useTranslation } from 'react-i18next';
import "../i18n";

export const EnterCodeComponent = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [code, setCode] = useState("");
    const [errorCode, setErrorCode] = useState(false);
    const [errorCodeText, setErrorCodeText] = useState("");
    
    const onHandleCodeChange = useCallback((event) =>{
        if(code.length > 3) (event.target.value = "");

        if(!isValidCode(event.target.value)){
            setErrorCode(true)
            setErrorCodeText(t("messages.code error"))
        }else {
            setErrorCode(false);
        }
        setCode(event.target.value);
      }, [code, setErrorCode, setErrorCodeText, ]);
   
        const onEnter= useCallback(()=>{
            if(code === "1234"){
                dispatch(setIsRegisteredAction(true))
                navigate("/");
            }
        },[dispatch, code])
    return(
        <div className="form"> 
            {errorCode?<Message message = {t("messages.form error")}/>: null}
            <Typography>{t("messages.enter code")}</Typography>
            <div className="input">
                <PasswordInputComponent 
                    id="code"
                    value = {code}
                    handleChange = {onHandleCodeChange}
                    error = {errorCode}
                />
                { errorCode? <p className="errorText">{errorCodeText}</p> : null}
            </div>
            <Button variant="text" onClick = {onEnter} >{t("account.btns.enter")}</Button>
        </div>
    )
}