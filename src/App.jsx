import { Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'

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
      </Route>
    </Routes>
  )
}

export default App