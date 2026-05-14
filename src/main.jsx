import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from './App'

import CartProvider from './context/CartContext'
import BudgetProvider from './context/BudgetContext'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <BudgetProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </BudgetProvider>
  </React.StrictMode>
)