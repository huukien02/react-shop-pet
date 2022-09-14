import React from 'react'
import './Menu.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function Menu() {
  return (
    <div>
         <nav>
          <ul className='Menu'>
            <li className='Menu_1'> <NavLink activeClassName='active' to="/">Sản Phẩm</NavLink>
                <ul className='Menu_child_1'>
                  <li>Thú Cưng & Vật Dụng</li>
                  <li>Thuốc trị bệnh</li>
                  <li>Balo & Giỏ Xách</li>
                  <li>Quần Áo Thú Cưng</li>
                </ul>
            </li>
            <li> <NavLink activeClassName='active' to="/sale">Khuyến mãi</NavLink> </li>
            <li> <NavLink activeClassName='active' to="/#">Tin tức</NavLink></li>
            <li className='Menu_2'> <NavLink activeClassName='active' to="/#">Cách nuôi</NavLink>
               <ul className='Menu_child_2'>
                  <li>Nuôi Hamster</li>
                  <li>Nuôi Nhím </li>
                  <li>Nuôi Thỏ</li>
                  <li>Nuôi Chó & Mèo</li>
                </ul>
            </li>
            <li> <NavLink activeClassName='active' to="/#">Liên hệ</NavLink></li>
          </ul>
        </nav> 
    </div>
  )
}

export default Menu