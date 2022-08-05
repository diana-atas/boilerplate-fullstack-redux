import { configureStore } from '@reduxjs/toolkit'
import fruits from './slices/fruits'

const store = configureStore({
  reducer: {
    fruits,
  },
})

export default store
