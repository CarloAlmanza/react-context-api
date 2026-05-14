import { Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout'

import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/chi-siamo"
          element={<AboutPage />}
        />

        <Route
          path="/prodotti"
          element={<ProductsPage />}
        />

        <Route
          path="/prodotti/:id"
          element={<ProductDetailPage />}
        />

        <Route
          path="/carrello"
          element={<CartPage />}
        />
      </Route>
    </Routes>
  )
}

export default App