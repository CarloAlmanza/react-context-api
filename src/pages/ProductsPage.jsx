import {
    useEffect,
    useState,
    useContext,
} from 'react'

import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'

import { BudgetContext } from '../context/BudgetContext'

function ProductsPage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] =
        useState('')

    // CONTEXT
    const { budgetMode } =
        useContext(BudgetContext)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    if (loading) return <Loader />

    // CATEGORIE
    const categories = [
        ...new Set(
            products.map((product) => product.category)
        ),
    ]

    // FILTRI
    const filteredProducts = products.filter(
        (product) => {
            // SEARCH
            const matchesSearch =
                product.title
                    .toLowerCase()
                    .includes(search.toLowerCase())

            // CATEGORY
            const matchesCategory =
                selectedCategory === '' ||
                product.category === selectedCategory

            // BUDGET MODE
            const matchesBudget =
                !budgetMode || product.price <= 30

            return (
                matchesSearch &&
                matchesCategory &&
                matchesBudget
            )
        }
    )

    return (
        <div>
            <h1 className="mb-4">
                Prodotti
            </h1>

            {/* ALERT BUDGET */}
            {budgetMode && (
                <div className="alert alert-warning">
                    Modalità Budget attiva:
                    vengono mostrati solo prodotti
                    con prezzo inferiore o uguale a €30
                </div>
            )}

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
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                ) : (
                    <p>
                        Nessun prodotto trovato
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProductsPage