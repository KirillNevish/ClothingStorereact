import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import StarRating from '../../Stars/StarRating';
import style from './Tmeplates.module.css'
import Footer from '../../DefaultFooter/Footer'


function Tmeplates(props) {

    const location = useLocation();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');

    const [selectedButton, setSelectedButton] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId === selectedButton ? null : buttonId);
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [productImage];

    const handleImageClick = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const name = searchParams.get('productName') || '';
        const price = searchParams.get('productPrice') || '';
        const description = searchParams.get('productDescription') || '';
        const image = searchParams.get('productImage') || '';
        setProductName(name);
        setProductPrice(price);
        setProductDescription(description);
        setProductImage(image)
      }, [location.search]);

    const handleAddToCart = () => {

        const isLoggedIn = document.cookie.includes('AccsuccefullyLogined');


        if (isLoggedIn) {
            const isInCart = cartItems.some(item => item.name === productName && item.selectedSize === selectedButton);
            if (!isInCart) {
  
                const productData = {
                    name: productName,
                    price: productPrice,
                    description: productDescription,
                    image: productImage,
                    selectedSize: selectedButton,

                    fromUrl: window.location.href
                };
                const updatedCart = [...cartItems, productData];
                setCartItems(updatedCart);
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            }
            navigate('/cart');
        } else {
            navigate('/signin');
        }
    };

    const handleRemoveFromCart = () => {

        const updatedCart = cartItems.filter(item => !(item.name === productName && item.selectedSize === selectedButton));
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };


    return (
        <>
        <div className="container-fluid justify-content-center">
            <div className="container-xl p-2 d-flex flex-column flex-md-row">
                <div className="col-md-6">
                    <img src={images[currentIndex]} className="img-fluid" alt="img" />
                </div>
                <div className="pt-5 col-md-6 row row-cols-1 row-cols-sm-2 row-cols-md-1">
                    <p className="fs-1 mx-2">{productName}</p>
                    <div className="mx-2 pt-2 fs-5">
                        <StarRating />
                    </div>
                    <p className="fs-4 pt-2 mx-2">{productPrice}</p>
                    <div className="w-100 pt-2" onClick={handleImageClick}>
                        <p className="fs-4 mx-2">Photos:</p>
                        <div style={{ display: 'flex' }}>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    style={{ width: 70, height: 70, marginRight: 10, cursor: 'pointer' }}
                                    alt={`photo-${index}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-100 pt-2">
                        <p className="fs-4 mx-2">Size:</p>
                        <div className="d-flex p-2 justify-content-evenly">
                            <button
                                id={style.buttonAllId}
                                className={`fs-5 px-3 border rounded ${selectedButton === 1 ? 'text-bg-secondary' : ''}`}
                                onClick={() => handleButtonClick(1)}
                            >
                                1) S — 46-48
                            </button>
                            <button
                                id={style.buttonAllId}
                                className={`fs-5 px-3 border rounded ${selectedButton === 2 ? 'text-bg-secondary' : ''}`}
                                onClick={() => handleButtonClick(2)}
                            >
                                2) M — 48-50
                            </button>
                            <button
                                id={style.buttonAllId}
                                className={`fs-5 px-3 border rounded ${selectedButton === 3 ? 'text-bg-secondary' : ''}`}
                                onClick={() => handleButtonClick(3)}
                            >
                                3) L — 50-52
                            </button>
                        </div>
                        <div className="d-flex p-2 justify-content-evenly">
                            <button
                                id={style.buttonAllId}
                                className={`fs-5 px-3 border rounded ${selectedButton === 4 ? 'text-bg-secondary' : ''}`}
                                onClick={() => handleButtonClick(4)}
                            >
                                4) XL — 52-54
                            </button>
                            <button
                                id={style.buttonAllId}
                                className={`fs-5 px-3 border rounded ${selectedButton === 5 ? 'text-bg-secondary' : ''}`}
                                onClick={() => handleButtonClick(5)}
                            >
                                5) XXL — 54-56
                            </button>
                            <button
                                id={style.buttonAllId}
                                className={`fs-5 px-3 border rounded ${selectedButton === 6 ? 'text-bg-secondary' : ''}`}
                                onClick={() => handleButtonClick(6)}
                            >
                                6) 3XL – 56- 58
                            </button>
                        </div>
                    </div>
                    <div className="w-100 pt-5 d-flex justify-content-center align-items-center">
                        {cartItems.some(item => item.name === productName && item.selectedSize === selectedButton) ? (
                            <button type="button" className="btn btn-danger p-2 w-75 fs-5" onClick={handleRemoveFromCart}>
                                Remove from Cart
                            </button>
                        ) : (
                            <button type="button" className="btn btn-warning p-2 w-75 fs-5" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        )}
                    </div>
                    <div className="w-100 pt-5 align-items-center">
                        <p className="fs-4 mx-2">Description:</p>
                        <p className="fs-5 mx-2 text-secondary">{productDescription}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Tmeplates;

