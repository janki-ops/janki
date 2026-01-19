import React from 'react'
import { createStore } from 'redux'
import HelloReduxReducer from './HelloReduxReducer'

const HelloReduxStore = createStore(HelloReduxReducer)
 


export default HelloReduxStore