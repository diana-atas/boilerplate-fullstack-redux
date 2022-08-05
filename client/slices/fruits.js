import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFruits } from '../apis/fruits'

export const fetchFruits = createAsyncThunk('fruits/fetchFruits', async () => {
  return await getFruits()
})

const slice = createSlice({
  name: 'fruits',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchFruits.fulfilled]: (state, { payload }) => payload,
  },
})

export const selectFruits = (state) => state.fruits
export default slice.reducer
