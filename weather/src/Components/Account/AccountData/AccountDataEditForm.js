import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserModelAction } from "../../../Store/App/actions";
import { isValidName, isValidEmail, isValidTel, isValidPassword } from "../../Login/FormSubmitHandler";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export const AccountDataEditForm = ({user, onCancel}) =>{

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [password, setPassword] = useState(user.password);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [lastName, setLastName] = useState(user.lastName);
    const [tel, setTel] = useState(user.tel);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorTel, setErrorTel] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [validForm, setValidForm] = useState(true);

    const onHandleEmailChange = useCallback((event) =>{
        if(!isValidEmail(event.target.value)){
            setErrorEmail(true)
            setValidForm(false);
        }else {
            setErrorEmail(false);
            setValidForm(true);
        }
        setEmail(event.target.value);
    }, [setEmail, setErrorEmail, setValidForm]);

    const onHandleNameChange = useCallback((event) =>{
        if(!isValidName(event.target.value)){
            setErrorName(true);
            setValidForm(false);
        } else {
            setErrorName(false);
            setValidForm(true);
        }
        setName(event.target.value);
    }, [setName, setErrorName, setValidForm]);

    const onHandleLastNameChange = useCallback((event) =>{
        if(!isValidName(event.target.value)){
            setErrorLastName(true);
            setValidForm(false);
        } else {
            setErrorLastName(false);
            setValidForm(true);
        }
        setLastName(event.target.value);
    }, [setLastName, setErrorLastName, setValidForm]);

    const onHandleTelChange = useCallback((event) =>{
        if(!isValidTel(event.target.value)){
            setErrorTel(true);
            setValidForm(false);
        } else {
            setErrorTel(false);
            setValidForm(true);
        }
        setTel(event.target.value);
    }, [setTel, setErrorTel, setValidForm]);

    const onHandlePasswordChange = useCallback((event) =>{
        if(password.length > 5) (event.target.value = "");
        if(!isValidPassword(event.target.value)){
            setErrorPassword(true)
            setValidForm(false);
        }else {
            setErrorPassword(false);
            setValidForm(true);
        }
        setPassword(event.target.value);
      }, [password, setErrorPassword, setValidForm]);

    const onSave = useCallback(()=>{  
        if(validForm){
            dispatch(updateUserModelAction({
            id: user.id,
            name: name,
            lastName: lastName,
            tel: tel,
            email: email,
            password: password,}))
        }
    },[dispatch, user.id, validForm, name, lastName, tel, email, password])
   
    return(

        <Box className = "userInfo">
            <TextField id="name" 
                error = {errorName}
                value = {name}
                variant="standard"
                onChange = {onHandleNameChange}
            />
            <TextField id="lastName" 
                error = {errorLastName}
                value = {lastName}
                variant="standard"
                onChange = {onHandleLastNameChange}
            />
            <TextField id="email"
                error = {errorEmail}
                value = {email}
                variant="standard"
                onChange = {onHandleEmailChange}
            />
            <TextField id="tel"
                error = {errorTel}
                value = {tel}
                variant="standard"
                onChange = {onHandleTelChange}
            />
            <TextField id="password"
                error = {errorPassword}
                value = {password}
                variant="standard"
                onChange = {onHandlePasswordChange}
            />
            <Box className="userAccountBtns">
                <Button variant="outlined" 
                    onClick = {onSave}>
                        {t("sport.btn save")}
                </Button>
                <Button variant="outlined"
                    onClick = {onCancel}>
                        {t("account.btns.cancel")}
                </Button>
            </Box>
        </Box>

    )
}

