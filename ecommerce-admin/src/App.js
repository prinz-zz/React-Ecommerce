import React from 'react';
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Userlist from './pages/userlist/Userlist';
import User from './pages/user/User';
import Newuser from './pages/newUser/Newuser';
import Productlist from './pages/productList/Productlist';
import Product from './pages/product/Product';
import Newproduct from './pages/newProduct/Newproduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  console.log(admin)
  return (
    
    <BrowserRouter>
            {/* <Routes>
              <Route path='/login' element={<Login />} /> 
              </Routes> */}
      {admin && (
          <>  
          <Topbar /> 
          <div className="container">
           <Sidebar />
           <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users' element={<Userlist />} />
              <Route path='/user/:userId' element={<User />} />
              <Route path='/newUser' element={<Newuser />} />
              <Route path='/products' element={<Productlist />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/newProducts' element={<Newproduct />} />
              </Routes>
            </div>
          
            </>
        )}
     
      </BrowserRouter>
     
  );
}

export default App;
