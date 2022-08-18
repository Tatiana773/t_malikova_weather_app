import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { selectIsLogin } from "./Store/App/selectors";
import { RegistrationRouter } from "./Components/Login/index";
import { AppRouter } from "./Components/AppRouter";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";



function App() {

    const isAppLogin= useSelector(selectIsLogin);

    return isAppLogin ? 
    <Suspense fallback = {<CircularProgress className="progress"/>}><AppRouter /></Suspense> : 
    <Suspense fallback = {<CircularProgress className="progress"/>}><RegistrationRouter /></Suspense>
}

export default App;
