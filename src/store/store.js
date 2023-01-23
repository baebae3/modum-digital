import { configureStore } from '@reduxjs/toolkit'
import giftSlice from './reducers/gifts'
import chartsSlice from './reducers/charts'
import historySlice from './reducers/history'

export const store = configureStore({
  reducer: {
    gifts: giftSlice,
    charts: chartsSlice,
    history: historySlice
  },

})