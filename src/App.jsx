import Header from './components/StickHeader/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'

import About from './components/Pages/NavAbout/About';
import New from './components/Pages/NavNew/New';
import Home from './components/Pages/MainHome/Home';

import SignInPage from './components/Pages/SignIn/SignInPage';

import UpperClothing from './components/Pages/AllShirtsHoodiesSweaters/UpperClothing'
import PantsShorts from './components/Pages/AllPantsShorts/PantsShorts'
import Shoes from './components/Pages/AllShoes/Shoes'

import Tmeplates from './components/Pages/Template/Tmeplates';

import Cart from './components/Pages/ProductCart/Cart';

import CheckoutPage from './components/Pages/Checkout/CheckoutPage';


import { Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
    <div className='App'>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<New />} />
        <Route path="/signin" element={<SignInPage />} />


        <Route path="/shoes" element={<Shoes />} />
        <Route path="/upperclothing" element={<UpperClothing />} />
        <Route path="/lowerclothing" element={<PantsShorts />} />

        <Route path="/template" element={<Tmeplates />} />


        <Route path="/cart" element={<Cart/>} />

        <Route path="/checkout" element={<CheckoutPage/>} />

      </Routes>
    </div>
    </>
  )
}

export default App



