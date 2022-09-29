import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./citySlice/citySlice";
import otherDaysSlice from "./otherDaysSlice/otherDaysSlice";
import themeSlice from "./themeSlice/themeSlice";
import thisDaySlice from "./thisDaySlice/thisDaySlice";



export const store = configureStore({
	reducer: {
    theme: themeSlice,
    thisDay: thisDaySlice,
    otherDays: otherDaysSlice,
    city: citySlice
	},

})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch