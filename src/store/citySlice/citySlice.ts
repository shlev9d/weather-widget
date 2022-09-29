import { createSlice } from '@reduxjs/toolkit';

type ICity = {
  city: string
}

const initialState: ICity = {
  city: 'Amsterdam'
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload
    }
  }
})

export const {changeCity} = citySlice.actions
export default citySlice.reducer