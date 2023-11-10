import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'

import { Router } from './navigation/Router'
import { persistor, store } from './core/app/store'
import { ANTD_NEW_THEME } from './helpers/antdTheme'

function App() {
  return (
    <React.StrictMode>
      <ConfigProvider theme={ANTD_NEW_THEME}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<p>Loading...</p>}>
            <Router />
          </PersistGate>
        </Provider>
      </ConfigProvider>
    </React.StrictMode>
  )
}

export default App
