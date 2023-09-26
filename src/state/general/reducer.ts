import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

// Actions and Reducers

const generalStateSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setActive(state: any) {
      return {
        ...state,
        isActive: true
      }
    },
    setInactive(state: any) {
      return {
        ...state,
        isActive: false
      }
    },
    reset(state: any, action) {
      return {
        ...initialState
      }
    }
  }
})

export default generalStateSlice