import React, { useState, createContext, useCallback, useMemo } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, } from "react-router-dom";
import { HomePageComponent } from "./Weather/Home/HomeComponent";
import { PageNotFound } from "./PageNotFound/PageNotFound";
import { CityPageComponent } from "./Weather/City/CityPageComponent";
import { ForecastComponent } from "./Weather/Forecast/ForecastComponent";
import { HistoryComponent } from "./Weather/History/HistoryComponent";
import { SportEventsComponent } from "./Weather/Sport/SportEventsComponent";
import { AppBarComponent } from '../Components/Weather/AppBar';
import { AccountDataComponent } from "./Account/AccountData/AccountDataComponent";
import './AppRouter.css';


export const ThemeContext = createContext("light");

export const AppRouter = () => {
  const [currentTheme, setCurrentTheme] = useState("light")
  const onThemeModeChanged = useCallback((event)=>{
    setCurrentTheme(event.target.checked? "dark":"light")
  },[])
  const theme = useMemo(() =>createTheme({
        palette: {
          mode: currentTheme,
        },
      }),[currentTheme],);

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
