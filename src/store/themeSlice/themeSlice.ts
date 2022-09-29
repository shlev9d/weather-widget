import { createSlice } from '@reduxjs/toolkit'

interface ITheme {
  theme: string
}

const initialState: ITheme = {
  theme: 'light'
}

export const themeSlice = createSlice({
name: 'theme',
initialState,
reducers: {
  changeTheme: (state) => {
    state.theme === 'light' ?  state.theme = 'dark' : state.theme ='light'
  }
}
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer
