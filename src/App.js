import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path='/products/:id' element={<Product/>}/>
      <Route exact path='/signin' element={<SignIn/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
