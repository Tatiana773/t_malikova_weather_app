import React, { useState, createContext, useCallback, useMemo, useEffect } from "react";
import { Routes, Route, } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { selectAreDataLoading, selectTheme } from "../Store/Home/selectors";
import { setThemeAction } from "../Store/Home/actions";
import { HomePageComponent } from "./Weather/Home/HomeComponent";
import { PageNotFound } from "./PageNotFound/PageNotFound";
import { ForecastComponent } from "./Weather/Forecast/ForecastComponent";
import { HistoryComponent } from "./Weather/History/HistoryComponent";
import { SportEventsComponent } from "./Weather/Sport/SportEventsComponent";
import { AppBarComponent } from "../Components/Weather/AppBar";
import { AccountDataComponent } from "./Account/AccountData/AccountDataComponent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import "./AppRouter.css";


export const ThemeContext = createContext("light");

export const AppRouter = () => {

  const dispatch = useDispatch();

  const areDataLoading = useSelector(selectAreDataLoading);
  const updatedTheme = useSelector(selectTheme);

  const [currentTheme, setCurrentTheme] = useState(updatedTheme || "light");

  const onThemeModeChanged = useCallback((event)=>{
    setCurrentTheme(event.target.checked? "dark":"light");
  },[setCurrentTheme]);

  const theme = useMemo(() =>createTheme({
    palette: {
      mode: currentTheme,
    },
  }),[currentTheme],);

  useEffect(()=>{
    dispatch(setThemeAction(currentTheme));
  },[dispatch, setCurrentTheme, currentTheme]);

  if(areDataLoading){
    <CircularProgress className="progress"/>
  }

  return (
    
    <ThemeContext.Provider value = {currentTheme}>
      <ThemeProvider theme={theme}>
        <div id={currentTheme} className="main">
          <AppBarComponent onModeChanged ={onThemeModeChanged}/>
          <Routes>
            <Route path="/" element={<HomePageComponent />}/>
            <Route path="/:name" element={<HomePageComponent />}/>
            <Route path="/forecast/:name" element={<ForecastComponent />} />
            <Route path="/history/:name/:historyDate" element={<HistoryComponent />} />
            <Route path="/sport/:name" element={<SportEventsComponent />} />
            <Route path="/account" element={<AccountDataComponent />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
