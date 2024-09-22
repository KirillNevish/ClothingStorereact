
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../../MainProducts/ProductCards.module.css';
import sweaterone from '../../MainProducts/images/upperclothing/123067427-knitted-brown-sweater-with-a-traditional-pattern-of-iceland-vector-illustration-on-white-background.jpg';
import shirtone from '../../MainProducts/images/upperclothing/204232947-t-shirt-icon-vector-image-suitable-for-mobile-apps-web-apps-and-print-media.jpg';
import shirttwo from '../../MainProducts/images/upperclothing/82096624-referee-tshirt-wear-icon-vector-illustration-graphic-design.jpg';
import shirtthree from '../../MainProducts/images/upperclothing/82096603-referee-tshirt-wear-icon-vector-illustration-graphic-design.jpg';
import shirtfour from '../../MainProducts/images/upperclothing/84277740-рубашка-в-черный-простой-силуэт-стиль-иконки-векторной-иллюстрации-для-дизайна-и-сети-изолированных.jpg';
import shirtfive from '../../MainProducts/images/upperclothing/205703589-fashionable-men-shirt-design-with-vector-icon.jpg';
import '../../../App.css';

function UpperClothing() {
  const upperClothingProducts = [
    { name: 'Classic Winter Sweater', image: sweaterone, price: '50,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Classic Blue T-Shirt', image: shirtone, price: '30,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Blue T-Shirt with lines', image: shirttwo, price: '27,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Green T-Shirt with lines', image: shirtthree, price: '27,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Classic Black&White T-Shirt', image: shirtfour, price: '25,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Grey&Blue T-Shirt', image: shirtfive, price: '34,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const savedSortOrder = localStorage.getItem('sortOrder');
    if (savedSortOrder) {
      setSortOrder(savedSortOrder);
    }
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    localStorage.setItem('sortOrder', newSortOrder);
  };

  const filteredProducts = upperClothingProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace(',', '.'));
      const priceB = parseFloat(b.price.replace(',', '.'));
      if (sortOrder === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

  return (
    <div className="pb-5">
      <div className="container-fluid d-flex justify-content-center mt-2">
        <div className="container-xl d-flex p-2 justify-content-between align-items-end">
          <button id={style.buttonAllId} className="fs-4 border border-0">
            <Link to="/" className="nav-link px-2 text-secondary">Back</Link>
          </button>
        </div>
      </div>


      <div className="container-fluid pt-2">
        <div className="container-fluid m-lg-2 d-flex justify-content-center mb-2">
          <div className="container-xl d-flex pt-2 justify-content-between align-items-end search-container">
            <select
              value={sortOrder}
              onChange={handleSortOrderChange}
              className={style.sortSelect}
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
            <input
              type="text"
              className={style.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1">
          {filteredProducts.map((product, index) => (
            <div key={index} className="col border border-0 bg-transparent">

              <Link
                to={`/template?productName=${encodeURIComponent(product.name)}&productPrice=${encodeURIComponent(product.price)}&productDescription=${encodeURIComponent(product.description)}&productImage=${encodeURIComponent(product.image)}`}
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                <div className="card shadow-sm">

                  <img src={product.image} height="300" alt="img" />
                  <div className="card-body">

                    <p className="card-text d-flex justify-content-between align-items-center">{product.name}</p>
                    <div className="d-flex justify-content-between align-items-center">

                      <small className="text-body-secondary">{product.price}</small>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpperClothing;