import { createSlice } from '@reduxjs/toolkit'

// State definition

type GeneralState = {
    isActive: boolean
    isFetching: boolean
}

const initialState: GeneralState = {
  isActive: false,
  isFetching: false
}

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

export const { setActive, setInactive, reset } = generalStateSlice.actions
export default generalStateSlice.reducer