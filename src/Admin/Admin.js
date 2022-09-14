import React, { useState, useEffect } from 'react';
import AdmProduct from './AdmProduct';
import AdmUser from './AdmUser';
import ThongKe from './ThongKe';

import './Admin.css'
import LogOut from '../LogOut/LogOut';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Order from './Order';

function Admin() {

  const show1 = () => {
    document.querySelector('.right_1').style.display = 'block'

    document.querySelector('.right_2').style.display = 'none'
    document.querySelector('.right_3').style.display = 'none'
    document.querySelector('.right_4').style.display = 'none'
  }
  const show2 = () => {
    document.querySelector('.right_2').style.display = 'block'

    document.querySelector('.right_1').style.display = 'none'
    document.querySelector('.right_3').style.display = 'none'
    document.querySelector('.right_4').style.display = 'none'
  }
  const show3 = () => {
    document.querySelector('.right_3').style.display = 'block'

    document.querySelector('.right_2').style.display = 'none'
    document.querySelector('.right_1').style.display = 'none'
    document.querySelector('.right_4').style.display = 'none'
  }
  const show4 = () => {
    document.querySelector('.right_4').style.display = 'block'

    document.querySelector('.right_2').style.display = 'none'
    document.querySelector('.right_1').style.display = 'none'
    document.querySelector('.right_3').style.display = 'none'
  }

  var token = document.cookie;
  var role = JSON.parse(localStorage.getItem('role'))
  return (
    <>
     
     {token ? ((role === 'admin' ? (<div>
        <LogOut />
        <h1 className='title'><i class="fa-solid fa-paw"></i> WELCOME TO PET SHOP <i class="fa-solid fa-paw"></i></h1>
        <div className='container'>
          <div className='left'>
            <ul>
              <li onClick={show1}><i class="fa-solid fa-book-open"></i> Thống Kê</li>
              <li onClick={show2}><i class="fa-solid fa-list"></i> Quản Lý Sản Phẩm</li>
              <li onClick={show3}><i class="fa-solid fa-user-large"></i> Quản Lý Người Dùng</li>
              <li onClick={show4}><i class="fa-solid fa-cart-flatbed"></i> Quản Lý Đơn Hàng</li>
            </ul>
          </div>
          <div className='right'>
            <div className='right_1'> <ThongKe /></div>
            <div className='right_2'> <AdmProduct /></div>
            <div className='right_3'>  <AdmUser /></div>
            <div className='right_4'><Order/></div>
          </div>
        </div>
        <Footer />
      </div>):(<h1>Bạn không đủ quyền</h1>))):(<Login/>)}

    </>
  )
}

export default Admin