import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  
]

export const giftSlice = createSlice({
  name: 'gifts',
  initialState,
  reducers: {

    addGift: (state, action) => {
      state.push(action.payload)
      state.map((item, index) => {
        item.id = index + 1
      })
    },
    deleteGift: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },
    refreshIds: (state) => {
      state.map((item, index) => item.id = index + 1)
    },
    returnGiftsState: (state, action) => {
      return (
        state = action.payload
        )
      
    }
  },
})

export const { addGift, deleteGift, refreshIds, returnGiftsState } = giftSlice.actions

export default giftSlice.reducer