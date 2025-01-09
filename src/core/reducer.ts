import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import { api } from './services/auth.api'
import { persistConfig, app } from './app'
import { practitionerApiRtk } from './api/practitionerApi'
import { userApiRtk } from './api/userApi'
import { patientApiRtk } from './api/patientApi'
import { deviceApiRtk } from './api/deviceApi'

export const appReducer = combineReducers({
  app: app.reducer,
  cardinalApi: api.reducer,
  practitionerApi: practitionerApiRtk.reducer,
  userApi: userApiRtk.reducer,
  deviceApi: deviceApiRtk.reducer,
  patientApi: patientApiRtk.reducer,
})

export const persistedReducer = persistReducer(persistConfig, appReducer)

export type AppState = ReturnType<typeof appReducer>
