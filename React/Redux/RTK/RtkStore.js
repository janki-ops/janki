import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import RtkReducer from './RtkReducer'

export const RtkStore = configureStore({
    reducer:{
        "User":RtkReducer
    }
})
  

