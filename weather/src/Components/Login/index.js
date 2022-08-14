import React from "react";
import { Routes, Route, } from "react-router-dom";
import { SignInComponent } from "./SignInComponent";
import { LogInComponent } from "./LogInComponent";
import { EnterCodeComponent } from "./EnterCodeComponent";

export const RegistrationRouter = () => {
  return (
  <div className="forms">
    <Routes>
      <Route path="/" element={<LogInComponent />} />
      <Route path="/register" element={<SignInComponent />} />
      <Route path="/verification" element={<EnterCodeComponent />} />
    </Routes>
  </div>
  )
}