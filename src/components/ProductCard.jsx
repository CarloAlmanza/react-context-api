import { Link } from 'react-router-dom'

function ProductCard({ product }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{
                        height: '250px',
                        objectFit: 'contain',
                    }}
                />

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        {product.title}
                    </h5>

                    <p className="card-text text-muted">
                        {product.category}
                    </p>

                    <p className="fw-bold fs-5">
                        € {product.price}
                    </p>

                    <Link
                        to={`/prodotti/${product.id}`}
                        className="btn btn-outline-dark mt-auto"
                    >
                        Dettagli
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard