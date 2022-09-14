import './Product.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import LogOut from '../LogOut/LogOut';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function Product() {
  var token = document.cookie;
  var name = JSON.parse(localStorage.getItem('name'))

  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await axios.get('/api/listpet');
      return res;
    }
    getData().then((res) => setData(res.data))
  }, [])


  const handleAddToCart = (e, id, name, price, img) => {

    if (window.confirm("Thêm sản phẩm này vào giỏ hàng")) {
      var list = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [];

      e.target.className = 'button-err'
      e.target.disabled = true;

      var pet = {
        id,
        name,
        price,
        img
      }
      list.push(pet)
      localStorage.setItem("Cart", JSON.stringify(list))
    }


  }




  return (
    <div>
      {name ? (
        <div>
          <LogOut />
          <Header />
          <Menu />
          <Banner />
          <div className='Menu'>
            <div className='DanhMuc'>
              <h3><i class="fa-solid fa-bars"></i> Danh Mục Sản Phẩm</h3>
              <ul className='DanhMuc_Menu'>
                <li>Chó & Mèo</li>
                <li>Nhím</li>
                <li>Hamster</li>
                <li>Thỏ</li>
                <li>Bò Sát</li>
              </ul>
            </div>

            <div className='listProduct'>
              {data.map((item, index) => {
                return (
                  <div className='product'>
                    <h4>{item.name}</h4>
                    <p>Price: <span>$</span>{item.price}</p>
                    <Link to={`/pet/${item._id}`}>
                      <img src={item.image} />
                    </Link>
                    <button onClick={(e) => handleAddToCart(e, item._id, item.name, item.price, item.image)} className='button'>ADD</button>
                  </div>
                )
              })}
            </div>
          </div>
          <Footer />
        </div>) :
        (<Login />)}
    </div>
  )
}

export default Product