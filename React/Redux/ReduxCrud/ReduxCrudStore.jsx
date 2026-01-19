import React from 'react'
import { createStore } from 'redux'
import ReduxCrudReducer from './ReduxCrudReducer'

const ReduxCrudStore = createStore(ReduxCrudReducer)

export default ReduxCrudStore