export const selectAreDataLoading = (state) => state.main.areDataLoading;
export const selectDataError = (state) => state.main.error;
export const selectDataCities = (state) => state.main.items;
export const selectCity = (state) => state.main.city;
export const selectDate = (state) => state.main.date;
export const selectDateHistory = (state) => state.main.dateHistory;
export const selectHistoryDay = (state) => state.main.history.forecast.forecastday[0];
export const selectFavouriteCities = (state) => state.main.favouriteCities;
export const selectForecast = (state) => state.main.forecast.current;
export const selectForecastDays = (state) => state.main.forecast.forecast.forecastday;
export const selectSport = (state) => state.main.sport;
export const selectEvents = (state) => state.main.favouriteEvents;
export const selectRealCity = (state) => state.main.forecast.location;
export const selectSystem = (state) => state.main.system;
export const selectLang = (state) => state.main.lang;
export const selectTheme = (state) => state.main.theme;