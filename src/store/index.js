import { configureStore } from '@reduxjs/toolkit'
import { spacesReducer } from './space'

export default configureStore({
    reducer: { spacesReducer },
  })