import generalSlice from './reducer'

// Actions are exported from the slice at the same time you create the reducer. Therefore, this file is just to make everything more declarative.
export const {
    setActive,
    setInactive,
    reset
} = generalSlice.actions