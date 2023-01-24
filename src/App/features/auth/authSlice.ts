import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  page: 'login',
  name: 'Login'
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    selectRegister: (state, action)=> {
     state.page = action.payload.page;
     state.name = action.payload.name;
    },
  },
})

export const { selectRegister } = authSlice.actions

