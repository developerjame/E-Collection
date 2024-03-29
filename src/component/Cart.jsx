import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const product = useSelector((product) => product.handleCart)
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title}
                        height="200px" width="180px"/>
                    </div>
                    <div>
                        <h3>{product.title}</h3>
                        <p className="lead fw-bold">
                            {product.qty} X ${product.price} = $
                            {product.qty * product.price}
                        </p>
                        <button className="btn btn-outline-dark me-4">

                            <i className="fa fa-minus"></i>
                        </button>
                        <button className="btn btn-outline-dark">
        
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;