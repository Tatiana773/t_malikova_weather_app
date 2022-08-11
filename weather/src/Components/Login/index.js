import React from "react";
import { Routes, Route, } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsRegistered } from "../../Store/App/selectors";
import { SignInComponent } from "./SignInComponent";
import { LogInComponent } from "./LogInComponent";
import { EnterCodeComponent } from "./EnterCodeComponent";

export const RegistrationRouter = () => {
  const isRegistered = useSelector(selectIsRegistered);
  return (
  <Routes>
  { isRegistered?
    <Route path="/" element={<LogInComponent />} />:
    <Route path="/" element={<SignInComponent />} />}
    <Route path="/verification" element={<EnterCodeComponent />} />
  </Routes>
  )
}