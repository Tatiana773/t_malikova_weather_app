import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUsers } from "../../Store/App/selectors";
import { setIsLoginAction, setCurrentUserAction } from "../../Store/App/actions";
import { TextInput } from "./TextInputComponent";
import { PasswordInputComponent } from "./PasswordInputComponent";
import Button from "@mui/material/Button";
import { isValidEmail, isValidPassword } from "./FormSubmitHandler";
import { Message } from "../Message/Message";
import { useTranslation } from "react-i18next";
import "../i18n";
import "./LoginComponent.css";

export const LogInComponent = () =>{

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector(selectUsers);

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorPasswordText, setErrorPasswordText] = useState("");
    const [validForm, setValidForm] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    
    const onHandleEmailChange = useCallback((event) =>{
        if(!isValidEmail(event.target.value)){
            setErrorEmail(true);
            setErrorText(t("messages.invalid"));
            setValidForm(false);
        }else {
            setErrorEmail(false);
            setValidForm(true);
        }
        setEmail(event.target.value);
    }, [setEmail, setErrorEmail, setErrorText, setValidForm]);

    const onHandlePasswordChange = useCallback((event) =>{
        if(password.length > 5) (event.target.value = "");
        if(!isValidPassword(event.target.value)){
            setErrorPassword(true);
            setErrorPasswordText(t("messages.password error"));
            setValidForm(false);
        }else {
            setErrorPassword(false);
            setValidForm(true);
        }
        setPassword(event.target.value);
      }, [password, setErrorPassword, setValidForm]);
   
    const onSubmitLog = useCallback(()=>{
        if(validForm){
            const current = users.find((user)=>(email === user.email && password === user.password));
            if(current){
                dispatch(setCurrentUserAction(current));
                dispatch(setIsLoginAction(true));
            }
        }else{
           setShowMessage(true);
        }
    },[dispatch, users, email, password, validForm, setShowMessage]);

    const onRegister = useCallback(()=>{
        navigate("/register");
    });

    return(

        <div className="form"> 
            {showMessage?
            <Message message = {t("messages.form error")}/>: 
            null}
            <div className="input">
                <TextInput 
                    id="email" 
                    label={t("account.email")} 
                    value={email} 
                    onTextFieldChange = {onHandleEmailChange} 
                    error = {errorEmail}
                    hint = {errorText}
                />
            </div>
            <div className="input">
                <PasswordInputComponent 
                    id="password"
                    value = {password}
                    handleChange = {onHandlePasswordChange}
                    error = {errorPassword}
                />
                { errorPassword? <p className="errorText">{errorPasswordText}</p> : null}
            </div>
            <Button variant="text"
                onClick = {onSubmitLog}>
                    {t("account.btns.login")}
            </Button>
            <p>{t("account.or")}</p>
            <Button variant="text"
                onClick = {onRegister}>
                    {t("account.btns.signin")}
            </Button>
  
        </div>
    )
}