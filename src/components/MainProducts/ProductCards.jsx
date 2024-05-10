import React from 'react';
import style from './ProductCards.module.css'
import {Link} from 'react-router-dom'
import shoeone from './images/shoes/122601137-red-sneaker-shoe-simple-vector-image.jpg'
import shoetwo from './images/shoes/15518964-обуви-холсте.jpg'
import shoethree from './images/shoes/207973165-colored-sneaker-on-a-white-background-sports-shoes-vector-illustration.jpg'

import sweaterone from './images/upperclothing/123067427-knitted-brown-sweater-with-a-traditional-pattern-of-iceland-vector-illustration-on-white-background.jpg'
import shirtone from './images/upperclothing/204232947-t-shirt-icon-vector-image-suitable-for-mobile-apps-web-apps-and-print-media.jpg'
import shirttwo from './images/upperclothing/82096624-referee-tshirt-wear-icon-vector-illustration-graphic-design.jpg'

import jeansone from './images/lowerclothing/117837592-fashion-jeans-vector-design.jpg'
import jeanstwo from './images/lowerclothing/195235108-pair-of-dark-blue-jeans-for-babies-and-kids-cartoon-illustration-hand-drawn-jeans-on-white.jpg'
import jeansthree from './images/lowerclothing/73974378-мужские-брюки-значок-мультфильм.jpg'

function ProductCards() {

  let ClassicSweaterName = 'Classic Winter Sweater';
  let ClassicSweaterPrice = '50,00';
  let sweaterProduct = {
      name: ClassicSweaterName,
      price: ClassicSweaterPrice,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.',
      image: sweaterone
  };

  let ClassicBlueTSName = 'Classic Blue T-Shirt';
  let ClassicBlueTSPrice = '30,00';
  let blueTSProduct = {
      name: ClassicBlueTSName,
      price: ClassicBlueTSPrice,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.',
      image: shirtone
  };

  let BlueTSWithLinesName = 'Classic Blue T-Shirt with lines';
  let BlueTSWithLinesPrice = '27,00';
  let blueTSWithLinesProduct = {
      name: BlueTSWithLinesName,
      price: BlueTSWithLinesPrice,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.',
      image: shirttwo
  };


  let BlueLongJeansName = 'Blue Long Jeans';
  let BlueLongJeansPrice = '42,00';
  let blueLongJeansProduct = {
      name: BlueLongJeansName,
      price: BlueLongJeansPrice,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.',
      image: jeansone
  };

  let BlueLongShortsName = 'Blue Long Shorts';
  let BlueLongShortsPrice = '30,00';
  let blueLongShortsProduct = {
      name: BlueLongShortsName,
      price: BlueLongShortsPrice,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.',
      image: jeanstwo
  };

  let ClassicBrownJeansName = 'Classic Brown Jeans';
  let ClassicBrownJeansPrice = '29,00';
  let classicBrownJeansProduct = {
      name: ClassicBrownJeansName,
      price: ClassicBrownJeansPrice,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.',
      image: jeansthree
  };


  let BlackPinkSneakersName = 'Black&Pink Sneakers';
  let BlackPinkSneakersPrice = '20,00';
  let blackPinkSneakersProduct = {
      name: BlackPinkSneakersName,
      price: BlackPinkSneakersPrice,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.',
      image: shoeone
  };

  let ClassicBlueWhiteSneakersName = 'Classic Blue&White Sneakers';
  let ClassicBlueWhiteSneakersPrice = '20,00';
  let classicBlueWhiteSneakersProduct = {
      name: ClassicBlueWhiteSneakersName,
      price: ClassicBlueWhiteSneakersPrice,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.',
      image: shoetwo
  };

  let ClassicRedSneakersName = 'Classic Red Sneakers';
  let ClassicRedSneakersPrice = '25,00';
  let classicRedSneakersProduct = {
      name: ClassicRedSneakersName,
      price: ClassicRedSneakersPrice,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eum. Id iusto libero est! Ullam tempora ipsa optio reiciendis veritatis harum nulla illo dolores accusamus, et ipsum, sapiente doloremque odio.',
      image: shoethree
  };

  return (
      <>
          <nav class="container-fluid">
              <div class="container-fluid m-lg-2 d-flex justify-content-center">
                  <div class="container-xl d-flex p-2 justify-content-between align-items-end">
                      <div class="fs-4 text-secondary">
                          Shirts & Hoodies:
                      </div>
                      <button id={style.buttonAllId} class="fs-4 border border-0">
                          <Link to="/upperclothing" class="nav-link px-2 text-secondary">See all</Link>
                      </button>
                  </div>
              </div>
              <div class="container">
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1">
                      <button class="col border border-0 bg-transparent">
                          <Link
                              to={`/template?productName=${encodeURIComponent(sweaterProduct.name)}&productPrice=${encodeURIComponent(sweaterProduct.price)}&productDescription=${encodeURIComponent(sweaterProduct.description)}&productImage=${encodeURIComponent(sweaterProduct.image)}`}
                              class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                              <div class="card shadow-sm">
                                  <img src={sweaterProduct.image} height="300" alt="img" />
                                  <div class="card-body">
                                      <p class="card-text d-flex justify-content-between align-items-center">{sweaterProduct.name}</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-body-secondary">{sweaterProduct.price}</small>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      </button>
                      <button class="col border border-0 bg-transparent">
                          <Link
                              to={`/template?productName=${encodeURIComponent(blueTSProduct.name)}&productPrice=${encodeURIComponent(blueTSProduct.price)}&productDescription=${encodeURIComponent(blueTSProduct.description)}&productImage=${encodeURIComponent(blueTSProduct.image)}`}
                              class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                              <div class="card shadow-sm">
                                  <img src={blueTSProduct.image} height="300" alt="img" />
                                  <div class="card-body">
                                      <p class="card-text d-flex justify-content-between align-items-center">{blueTSProduct.name}</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-body-secondary">{blueTSProduct.price}</small>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      </button>
                      <button class="col border border-0 bg-transparent">
                          <Link
                              to={`/template?productName=${encodeURIComponent(blueTSWithLinesProduct.name)}&productPrice=${encodeURIComponent(blueTSWithLinesProduct.price)}&productDescription=${encodeURIComponent(blueTSWithLinesProduct.description)}&productImage=${encodeURIComponent(blueTSWithLinesProduct.image)}`}
                              class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                              <div class="card shadow-sm">
                                  <img src={blueTSWithLinesProduct.image} height="300" alt="img" />
                                  <div class="card-body">
                                      <p class="card-text d-flex justify-content-between align-items-center">{blueTSWithLinesProduct.name}</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-body-secondary">{blueTSWithLinesProduct.price}</small>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      </button>
                  </div>
              </div>
          </nav>
          <nav class="container-fluid">

              <div class="container-fluid m-lg-2 d-flex justify-content-center">     
                         <div class="container-xl d-flex p-2 justify-content-between align-items-end">
                <div class="fs-4 text-secondary">
                  Pants & Shorts:
                 </div>
                <button id={style.buttonAllId} class="fs-4 border border-0">
                  <Link to="/lowerclothing" class="nav-link px-2 text-secondary">See all</Link>
               </button>
             </div>
              </div>
              <div class="container">
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1">
                      <button class="col border border-0 bg-transparent">
                          <Link
                              to={`/template?productName=${encodeURIComponent(blueLongJeansProduct.name)}&productPrice=${encodeURIComponent(blueLongJeansProduct.price)}&productDescription=${encodeURIComponent(blueLongJeansProduct.description)}&productImage=${encodeURIComponent(blueLongJeansProduct.image)}`}
                              class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                              <div class="card shadow-sm">
                                  <img src={blueLongJeansProduct.image} height="300" alt="img" />
                                  <div class="card-body">
                                      <p class="card-text d-flex justify-content-between align-items-center">{blueLongJeansProduct.name}</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-body-secondary">{blueLongJeansProduct.price}</small>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      </button>
                      <button class="col border border-0 bg-transparent">
                          <Link
                              to={`/template?productName=${encodeURIComponent(blueLongShortsProduct.name)}&productPrice=${encodeURIComponent(blueLongShortsProduct.price)}&productDescription=${encodeURIComponent(blueLongShortsProduct.description)}&productImage=${encodeURIComponent(blueLongShortsProduct.image)}`}
                              class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                              <div class="card shadow-sm">
                                  <img src={blueLongShortsProduct.image} height="300" alt="img" />
                                  <div class="card-body">
                                      <p class="card-text d-flex justify-content-between align-items-center">{blueLongShortsProduct.name}</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-body-secondary">{blueLongShortsProduct.price}</small>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      </button>
                      <button class="col border border-0 bg-transparent">
                          <Link
                              to={`/template?productName=${encodeURIComponent(classicBrownJeansProduct.name)}&productPrice=${encodeURIComponent(classicBrownJeansProduct.price)}&productDescription=${encodeURIComponent(classicBrownJeansProduct.description)}&productImage=${encodeURIComponent(classicBrownJeansProduct.image)}`}
                              class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                              <div class="card shadow-sm">
                                  <img src={classicBrownJeansProduct.image} height="300" alt="img" />
                                  <div class="card-body">
                                      <p class="card-text d-flex justify-content-between align-items-center">{classicBrownJeansProduct.name}</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-body-secondary">{classicBrownJeansProduct.price}</small>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      </button>
                  </div>
              </div>
          </nav>
          <nav class="container-fluid">
              <div class="container-fluid m-lg-2 d-flex justify-content-center">     
                         <div class="container-xl d-flex p-2 justify-content-between align-items-end">
                <div class="fs-4 text-secondary">
                  Shoes:
                 </div>
                <button id={style.buttonAllId} class="fs-4 border border-0">
                  <Link to="/shoes" class="nav-link px-2 text-secondary">See all</Link>
               </button>
             </div>
              </div>
              <div class="container">
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1">
                      <button class="col border border-0 bg-transparent">
                          <Link
                              to={`/template?productName=${encodeURIComponent(blackPinkSneakersProduct.name)}&productPrice=${encodeURIComponent(blackPinkSneakersProduct.price)}&productDescription=${encodeURIComponent(blackPinkSneakersProduct.description)}&productImage=${encodeURIComponent(blackPinkSneakersProduct.image)}`}
                              class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                              <div class="card shadow-sm">
                                  <img src={blackPinkSneakersProduct.image} height="300" alt="img" />
                                  <div class="card-body">
                                      <p class="card-text d-flex justify-content-between align-items-center">{classicRedSneakersProduct.name}</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-body-secondary">{classicRedSneakersProduct.price}</small>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      </button>
                      <button class="col border border-0 bg-transparent">
                          <Link
                              to={`/template?productName=${encodeURIComponent(blackPinkSneakersProduct.name)}&productPrice=${encodeURIComponent(blackPinkSneakersProduct.price)}&productDescription=${encodeURIComponent(blackPinkSneakersProduct.description)}&productImage=${encodeURIComponent(classicBlueWhiteSneakersProduct.image)}`}
                              class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                              <div class="card shadow-sm">
                                  <img src={classicBlueWhiteSneakersProduct.image} height="300" alt="img" />
                                  <div class="card-body">
                                      <p class="card-text d-flex justify-content-between align-items-center">{blackPinkSneakersProduct.name}</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-body-secondary">{blackPinkSneakersProduct.price}</small>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      </button>
                      <button class="col border border-0 bg-transparent">
                          <Link
                              to={`/template?productName=${encodeURIComponent(classicBlueWhiteSneakersProduct.name)}&productPrice=${encodeURIComponent(classicBlueWhiteSneakersProduct.price)}&productDescription=${encodeURIComponent(classicBlueWhiteSneakersProduct.description)}&productImage=${encodeURIComponent(classicRedSneakersProduct.image)}`}
                              class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                              <div class="card shadow-sm">
                                  <img src={classicRedSneakersProduct.image} height="300" alt="img" />
                                  <div class="card-body">
                                      <p class="card-text d-flex justify-content-between align-items-center">{classicBlueWhiteSneakersProduct.name}</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <small class="text-body-secondary">{classicBlueWhiteSneakersProduct.price}</small>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      </button>
                  </div>
              </div>
          </nav>
      </>
  );
}

export default ProductCards;

