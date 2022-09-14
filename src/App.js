import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Product from './Product/ListProduct';
import Sale from './Sale/Sale';
import Detail from './Detail_Pet/Detail';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Admin from './Admin/Admin';
import MyCart from './Cart/MyCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/pet/:id" element={<Detail/>} />
          <Route path="/mycart" element = {<MyCart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
