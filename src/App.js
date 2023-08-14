import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './Components/Layouts/Layout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductsCategory from './pages/ProductsCategory';
import Signup from './pages/Signup';
import Store from './Components/StoreContent/Store';
import Profile from './pages/Profile';
import { useSelector } from 'react-redux';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';

import Login from './pages/Login';
function App() {
  const isLogin = useSelector(state => state.cart.isLogin)

  return (
    <div className="App position-relative overflow-hidden ">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='commerce' element={<Home />} />
          <Route path='products/:category' element={<ProductsCategory />} />
          <Route path='productDetails/:id' element={<ProductDetails />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='store' element={<Store />} />
          <Route path='products/:category' element={<Store />} />
          <Route path='store/search' element={<Store />} />
          <Route path='store/search/:search' element={<Store />} />
          {isLogin && <Route path='profile' element={<Profile />} />}
          <Route path="*" element={<PageNotFound />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
