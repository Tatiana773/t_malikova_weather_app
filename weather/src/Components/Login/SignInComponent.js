import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css";
import { TextInput } from "./TextInputComponent";
import { PasswordInputComponent } from "./PasswordInputComponent";
import { PhoneInputComponent } from "./PhoneInputComponent";
import Button from "@mui/material/Button";
import { addUserModelAction} from "../../Store/App/actions";
import { isValidName, isValidEmail, isValidTel, isValidPassword } from "./FormSubmitHandler";
import { Message } from "../Message/Message";
import { useTranslation } from 'react-i18next';
import "../i18n";

export const SignInComponent = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [tel, setTel] = useState("");
    const [errorTel, setErrorTel] = useState(false);
    const [errorTelText, setErrorTelText] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorPasswordText, setErrorPasswordText] = useState("");
    const [validForm, setValidForm] = useState(true);
 
    const onHandleEmailChange = useCallback((event) =>{
        if(!isValidEmail(event.target.value)){
            setErrorEmail(true)
            setErrorText(t("messages.invalid"))
            setValidForm(false);
        }else {
            setErrorEmail(false);
            setValidForm(true);
        }
        setEmail(event.target.value);
    }, [setEmail, setErrorEmail, setErrorText, setValidForm]);

    const onHandleNameChange = useCallback((event) =>{
        if(!isValidName(event.target.value)){
            setErrorName(true);
            setErrorText(t("messages.invalid"))
            setValidForm(false);
        } else {
            setErrorName(false);
            setValidForm(true);
        }
        setName(event.target.value);
    }, [setName, setErrorName, setErrorText, setValidForm]);

    const onHandleLastNameChange = useCallback((event) =>{
        if(!isValidName(event.target.value)){
            setErrorLastName(true);
            setErrorText(t("messages.invalid"))
            setValidForm(false);
        } else {
            setErrorLastName(false);
            setValidForm(true);
        }
        
        setLastName(event.target.value);
    }, [setLastName, setErrorLastName, setErrorText, setValidForm]);

    const onHandleTelChange = useCallback((event) =>{
        if(!isValidTel(event.target.value)){
            setErrorTel(true);
            setErrorTelText(t("messages.tel error"))
            setValidForm(false);
        } else {
            setErrorTel(false);
            setValidForm(true);
        }
        setTel(event.target.value);
    }, [setTel, setErrorTel, setErrorTelText, setValidForm]);

    const onHandlePasswordChange = useCallback((event) =>{
        if(password.length > 5) (event.target.value = "");
        if(!isValidPassword(event.target.value)){
            setErrorPassword(true)
            setErrorPasswordText(t("messages.password error"))
            setValidForm(false);
        }else {
            setErrorPassword(false);
            setValidForm(true);
        }
        setPassword(event.target.value);
      }, [password, setErrorPassword, setValidForm]);
   
    const onSubmitSign = useCallback(()=>{
        if(validForm && name && lastName && tel && email && password){
            dispatch(addUserModelAction({
            name: name,
            lastName: lastName,
            tel: tel,
            email: email,
            password: password,
          }))
          navigate("/verification")
        }
    }, [name, lastName, tel, email, password, validForm])
      
    return(
        <div className="form"> 
            {!validForm?<Message message = {t("messages.form error")}/>: null}
            <div className="input">
                <TextInput 
                    id="name"
                    label={t("account.name")} 
                    value={name} 
                    onTextFieldChange = {onHandleNameChange} 
                    error = {errorName}
                    hint = {errorText}
                />
            </div>
            <div className="input">
                <TextInput 
                    id="Last name"  
                    label={t("account.lastname")}
                    value={lastName} 
                    onTextFieldChange = {onHandleLastNameChange} 
                    error = {errorLastName}
                    hint = {errorText}
                />
            </div>
            <div className="input">
                <PhoneInputComponent 
                    id = "tel"
                    value = {tel}
                    error = {errorTel}
                    onTelChange = {onHandleTelChange}
                    />
                    {errorTel ? <p className = "errorText">{errorTelText}</p> : null}
            </div> 
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
            <Button variant="text" onClick = {onSubmitSign}>{t("account.btns.signin")}</Button>
           
        </div>
    )
}