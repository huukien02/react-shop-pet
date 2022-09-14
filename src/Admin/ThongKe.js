import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ThongKe() {


    const [user, setUser] = useState([])
    const [product,setProduct] = useState([])
    const [order,setOrder] = useState([])

    useEffect(() => {
       async function getData() {
         const res = await axios.get('/api/users');
         return res;
       }
       getData().then((res) => setUser(res.data))
     }, [])

     useEffect(() => {
        async function getData() {
          const res = await axios.get('/api/listpet');
          return res;
        }
        getData().then((res) => setProduct(res.data))
      }, [])

      useEffect(() => {
        async function getData() {
          const res = await axios.get('/api/order');
          return res;
        }
        getData().then((res) => setOrder(res.data))
      }, [])

  return (
    <div style={{marginLeft:650}}>
        <h2>Thống Kê:</h2>
        <p>Số lượng Người Dùng: {user.length}</p>
        <p>Số lượng Sản Phẩm: {product.length}</p>
        <p>Số lượng Đơn Hàng: {order.length}</p>
    </div>

  )
}

export default ThongKe