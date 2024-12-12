import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { GlobalStyles } from './GlobalStyles/globalStyles.js'
import moment from 'moment'
import 'moment/dist/locale/pt-br'

moment.locale('pt-br')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
