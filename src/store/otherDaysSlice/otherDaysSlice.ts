import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IDays } from './otherDaysType'
import {  APPID_KEY, BASE_URL_OTHER_DAY} from './../../config';

type IDaysState = {
	otherDays: IDays
	loading: boolean
	error: string | null
}

export const fetchOtherDays = createAsyncThunk<
	IDays,
	string,
	{ rejectValue: string }
>('otherDays/fetchOtherDays', async (city, { rejectWithValue }) => {
	try {
		const response = await axios.get(BASE_URL_OTHER_DAY,{
			params: {
				q: city,
				units: 'metric',
				appid: APPID_KEY
			}
		})
		const data = response.data
		return data
	} catch (error) {
		return rejectWithValue('server Error')
	}
})

const initialState: IDaysState = {
	otherDays: {} as IDays,
	loading: false,
	error: null,
}

const otherDaysSlice = createSlice({
	name: 'otherDays',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchOtherDays.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchOtherDays.fulfilled, (state, action) => {
				state.otherDays = action.payload
				state.loading = false
			})
	},
})

export default otherDaysSlice.reducer
