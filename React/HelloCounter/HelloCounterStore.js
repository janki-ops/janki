import React from 'react'
import { createStore } from 'redux'
import HelloCounterReducer from './HelloCounterReducer'

const HelloCounterStore = createStore(HelloCounterReducer)
 

export default HelloCounterStore