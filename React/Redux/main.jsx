import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import CounterStore from './redux/CounterStore.js'
import { UserStore } from './CrudRedux/UserStore.js'
import { RtkStore } from './RTK/RtkStore.js'
import { CrudStore } from './CrudPractical/CrudStore.js'
import ReduxCrudReducer from './ReduxCrud/ReduxCrudReducer.jsx'
import ReduxCrudStore from './ReduxCrud/ReduxCrudStore.jsx'
import HelloReduxStore from './HelloRedux/HelloReduxStore.js'
import HelloCounterStore from './HelloCounter/HelloCounterStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={HelloCounterStore}>
    <App />
    </Provider>
  </StrictMode>,
)
