import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../../MainProducts/ProductCards.module.css';
import shoeone from '../../MainProducts/images/shoes/122601137-red-sneaker-shoe-simple-vector-image.jpg';
import shoetwo from '../../MainProducts/images/shoes/15518964-обуви-холсте.jpg';
import shoethree from '../../MainProducts/images/shoes/207973165-colored-sneaker-on-a-white-background-sports-shoes-vector-illustration.jpg';
import shoefour from '../../MainProducts/images/shoes/206477197-cute-sneakers-sneakers-isolated-on-white-background-cartoon-shoes-vector-illustration.jpg';
import shoefive from '../../MainProducts/images/shoes/206477206-cute-sneakers-sneakers-isolated-on-white-background-cartoon-shoes-vector-illustration.jpg';
import shoesix from '../../MainProducts/images/shoes/134412647-male-shoe-icon-design-cloth-fashion-style-wear-shop-retail-and-store-theme-vector-illustration.jpg';


function Shoes() {

  const shoesProducts = [
    { name: 'Classic Red Sneakers', image: shoeone, price: '25,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Black&Pink Sneakers', image: shoetwo, price: '20,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Classic Blue&White Sneakers', image: shoethree, price: '20,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Classic Brown&Yellow Sneakers', image: shoefour, price: '26,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Classic Blue&Yellow Sneakers', image: shoefive, price: '27,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Grey Long Sneakers', image: shoesix, price: '22,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' }
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

  const filteredProducts = shoesProducts
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
    <>
      <div className="container-fluid d-flex justify-content-center">
        <div className="container-xl d-flex p-2 justify-content-between align-items-end">
          <button id={style.buttonAllId} className="fs-4 border border-0">
            <Link to="/" className="nav-link px-2 text-secondary">Back</Link>
          </button>
        </div>
      </div>

      <div className="container-fluid pt-2">
        <div className="container-fluid m-lg-2 d-flex justify-content-center">
          <div className="container-xl d-flex p-2 justify-content-between align-items-end">
            <input
              type="text"
              className={style.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <select
              value={sortOrder}
              onChange={handleSortOrderChange}
              className={style.sortSelect}
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
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
    </>
  );
}

export default Shoes;