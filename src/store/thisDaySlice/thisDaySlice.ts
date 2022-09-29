import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IThisDay } from './thisDayType'
import { APPID_KEY, BASE_URL_THIS_DAY } from './../../config'

type IThisDayState = {
	thisDay: IThisDay
	loading: boolean
	error: string | null
}

export const fetchThisDay = createAsyncThunk<
	IThisDay,
	string,
	{ rejectValue: string }
>('thisDay/fetchThisDay', async (city, { rejectWithValue }) => {
	try {
		const response = await axios.get(BASE_URL_THIS_DAY, {
			params: {
				q: city,
				units: 'metric',
				appid: APPID_KEY,
			},
		})
		const data = response.data
		return data
	} catch (error) {
		return rejectWithValue('server Error')
	}
})

const initialState: IThisDayState = {
	thisDay: {} as IThisDay,
	loading: false,
	error: null,
}

const thisDaySlice = createSlice({
	name: 'thisDay',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchThisDay.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchThisDay.fulfilled, (state, action) => {
				state.thisDay = action.payload
				state.loading = false
			})
	},
})

export default thisDaySlice.reducer
