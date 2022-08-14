import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { appReducer } from "./App/reducer";
import { mainPageReducer } from "./Home/reducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    app: appReducer,
    main: mainPageReducer,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = store => next => action => {
    console.group(action.type)
    console.info("dispatching", action)
    let result = next(action)
    console.groupEnd()
    return result
}

export const store = createStore((persistedReducer),applyMiddleware(logger, thunk)) 

export const persistor = persistStore(store)


