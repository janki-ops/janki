import React from 'react'
import { createStore } from 'redux'
import { UserReducer } from './UserReducer'

export const UserStore = createStore(UserReducer)

