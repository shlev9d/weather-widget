import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import citySlice from "./citySlice/citySlice";
import otherDaysSlice from "./otherDaysSlice/otherDaysSlice";
import themeSlice from "./themeSlice/themeSlice";
import thisDaySlice from "./thisDaySlice/thisDaySlice";

const rootReducer = combineReducers({
	theme: themeSlice,
	thisDay: thisDaySlice,
	otherDays: otherDaysSlice,
	city: citySlice,
})

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})


export default store
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch