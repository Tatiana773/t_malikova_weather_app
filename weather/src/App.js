import React, {Suspense} from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { selectIsLogin } from "./Store/App/selectors";
import { RegistrationRouter } from "./Components/Login/index";
import { AppRouter } from "./Components/AppRouter";
import CircularProgress from '@mui/material/CircularProgress';



function App() {
    const isAppLogin= useSelector(selectIsLogin);
    return isAppLogin ? 
    <Suspense fallback = {<CircularProgress />}><AppRouter /></Suspense> : 
    <Suspense fallback = {<CircularProgress />}><RegistrationRouter /></Suspense>
}

export default App;
