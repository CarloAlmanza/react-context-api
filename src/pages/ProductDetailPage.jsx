import { useEffect, useState } from 'react'

import {
    useParams,
    useNavigate,
} from 'react-router-dom'

import Loader from '../components/Loader'

function ProductDetailPage() {
    const { id } = useParams()

    const navigate = useNavigate()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        fetch(
            `https://fakestoreapi.com/products/${id}`
        )
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loader />

    return (
        <div className="row">
            <div className="col-md-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                    style={{
                        maxHeight: '400px',
                        objectFit: 'contain',
                    }}
                />
            </div>

            <div className="col-md-6">
                <h1>{product.title}</h1>

                <p className="text-muted">
                    {product.category}
                </p>

                <p>{product.description}</p>

                <h3 className="my-4">
                    € {product.price}
                </h3>

                <div className="d-flex gap-2">
                    <button className="btn btn-primary">
                        Acquista
                    </button>

                    <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                            navigate('/prodotti')
                        }
                    >
                        Torna ai prodotti
                    </button>
                </div>

                {/* BONUS */}
                <div className="d-flex gap-2 mt-4">
                    <button
                        className="btn btn-dark"
                        disabled={id <= 1}
                        onClick={() =>
                            navigate(
                                `/prodotti/${Number(id) - 1}`
                            )
                        }
                    >
                        ← Precedente
                    </button>

                    <button
                        className="btn btn-dark"
                        disabled={id >= 20}
                        onClick={() =>
                            navigate(
                                `/prodotti/${Number(id) + 1}`
                            )
                        }
                    >
                        Successivo →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage