import { useEffect, useState } from 'react'

import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'

function ProductsPage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] =
        useState('')

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    if (loading) return <Loader />

    const categories = [
        ...new Set(
            products.map((product) => product.category)
        ),
    ]

    const filteredProducts = products.filter(
        (product) => {
            const matchesSearch =
                product.title
                    .toLowerCase()
                    .includes(search.toLowerCase())

            const matchesCategory =
                selectedCategory === '' ||
                product.category === selectedCategory

            return matchesSearch && matchesCategory
        }
    )

    return (
        <div>
            <h1 className="mb-4">Prodotti</h1>

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={
                    setSelectedCategory
                }
            />

            <div className="row">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsPage