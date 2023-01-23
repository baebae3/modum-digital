import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  
]

export const giftSlice = createSlice({
  name: 'history',
  initialState,
  reducers: {

    addHistoryItem: (state, action) => {
        state.push(action.payload)
    },
  },
})

export const {addHistoryItem } = giftSlice.actions

export default giftSlice.reducer