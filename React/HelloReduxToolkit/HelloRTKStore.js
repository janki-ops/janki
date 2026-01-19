import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import HelloRTKReducer from './HelloRTKReducer'

const HelloRTKStore = configureStore({
    reducer:{
        "User":HelloRTKReducer
    }
})
 

export default HelloRTKStore