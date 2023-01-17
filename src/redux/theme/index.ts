
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';



const initialState: { value: string } = {
   value: "light"
}

export const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      light: state => {
         state.value = "light"
      },
      dark: state => {
         state.value = "dark"
      }
   },

});

export const { } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;