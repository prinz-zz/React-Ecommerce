
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import { useSelector } from 'react-redux';




export default function App() {

  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:category' element={<ProductList/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={ user ? (<Navigate replace to="/" />) : (<Login/>)}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

