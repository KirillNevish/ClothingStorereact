
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../MainProducts/ProductCards.module.css';
import jeansone from '../../MainProducts/images/lowerclothing/117837592-fashion-jeans-vector-design.jpg';
import jeanstwo from '../../MainProducts/images/lowerclothing/195235108-pair-of-dark-blue-jeans-for-babies-and-kids-cartoon-illustration-hand-drawn-jeans-on-white.jpg';
import jeansthree from '../../MainProducts/images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg';
import jeansfour from '../../MainProducts/images/lowerclothing/173790220-long-skinny-pants-color-variation-for-coloring-page-isolated-on-white-background.jpg';
import jeansfive from '../../MainProducts/images/lowerclothing/176183903-illustration-denim-jeans-pants-front-view-jeans-vector-icon-cartoon-isolated-on-white-background.jpg';
import jeanssix from '../../MainProducts/images/lowerclothing/107198275-jeans-icon-vector-isolated-on-white-background-for-your-web-and-mobile-app-design.jpg';

function PantsShorts(props) {
  const pantsShortsProducts = [
    { name: 'Blue Long Jeans', image: jeansone, price: '42,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Blue Long Shorts', image: jeanstwo, price: '30,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Classic Brown Jeans', image: jeansthree, price: '29,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Yellow Pants', image: jeansfour, price: '44,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Classic Blue Pants', image: jeansfive, price: '40,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' },
    { name: 'Classic Black Jeans', image: jeanssix, price: '45,00', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.' }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = pantsShortsProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div class="container-fluid d-flex justify-content-center">
        <div class="container-xl d-flex p-2 justify-content-between align-items-end">
          <button id={style.buttonAllId} class="fs-4 border border-0">
            <Link to="/" class="nav-link px-2 text-secondary">Back</Link>
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
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1 ">
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

export default PantsShorts;