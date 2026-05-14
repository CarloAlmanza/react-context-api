function CartItem({ item, removeFromCart }) {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="row g-0 align-items-center">
                <div className="col-md-2 text-center p-2">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                        style={{
                            height: '100px',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">
                            {item.title}
                        </h5>

                        <p className="text-muted mb-2">
                            {item.category}
                        </p>

                        <div className="d-flex justify-content-between align-items-center">
                            <span className="fw-bold fs-5">
                                € {item.price}
                            </span>

                            <button
                                className="btn btn-danger"
                                onClick={() =>
                                    removeFromCart(item.id)
                                }
                            >
                                Rimuovi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem