import { configureStore } from '@reduxjs/toolkit';
import userReducer from './pages/signup-signin/userSlice';
import bookReducer from './pages/books/bookSlice'
import burrowReducer from "./pages/burrow-history/burrowSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const userPersistConfig = {
    key: "userInfo",
    storage,
}

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
    reducer:{
        userInfo: persistedUserReducer, //sync with local storage 
        // testUser: userReducer, // for testing purpose
        bookInfo: bookReducer,
        burrowInfo: burrowReducer,
    },
})

const persistor = persistStore(store);

export {store, persistor};