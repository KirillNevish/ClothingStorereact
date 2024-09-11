
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

    const handleRemoveItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            navigate('/checkout');
        }
    };

    return (
        <>
            <div className="container-fluid justify-content-center">

            </div>
            <div className="container-xl">
                <hr className="my-3 w-100 d-flex align-self-center" />
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col-md-6">
                        {cartItems && cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <div key={index} className="border border-0 bg-transparent mb-3">
                                    <Link className="text-decoration-none" to={item.fromUrl}>
                                        <div className="card shadow-sm">
                                            <img src={item.image} height="300" alt={item.name} />
                                            <div className="card-body">
                                                <p className="card-text d-flex justify-content-between align-items-center">{item.name}</p>
                                                <p className="text-secondary">Size: {item.selectedSize}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small className="text-body-secondary">{item.price}</small>
                                                    <button className="btn btn-danger" onClick={() => handleRemoveItem(index)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="fs-4 mx-2 mt-2 text-secondary">No items in cart</p>
                        )}
                    </div>
                    <div className="pt-5 col-md-6">
                        <div className="w-100 pt-2 border border-black ">
                            <p className="fs-3 mx-2">Order Summary</p>
                            <div className="d-flex justify-content-between">
                                <p className="fs-4 mx-2 mt-2 text-secondary">Shipping Price:</p>
                                <p className="fs-4 mx-2 mt-2 text-secondary">FREE</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="fs-4 mx-2 mt-2 text-secondary">Order Total:</p>
                                <p className="fs-4 mx-2 mt-2">{`$${totalPrice.toFixed(2)}`}</p>
                            </div>
                        </div>
                        <div className="w-100 mt-5 mb-5 d-flex justify-content-center align-items-center">
                            <button type="button" className="btn btn-warning p-2 w-100 fs-5" onClick={handleCheckout} disabled={cartItems.length === 0}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;