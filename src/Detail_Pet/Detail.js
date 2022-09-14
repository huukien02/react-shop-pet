import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Detail.css'
import LogOut from "../LogOut/LogOut";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Comment from "../Comment/Comment";

function Detail() {
  var name = JSON.parse(localStorage.getItem('name'))


  const [data, setData] = useState([])
  let { id } = useParams()
  var item = {}

  useEffect(() => {
    async function getData() {
      const res = await axios.get('/api/listpet');
      return res;
    }
    getData().then((res) => setData(res.data))
  }, [])

  for (let i = 0; i < data.length; i++) {
    if (data[i]._id == id) {
      item = data[i]
    }
  }

  var token = document.cookie;

  return (
    <div>
      {name ? (<div>
        <LogOut />
        <h1 className='title'><i class="fa-solid fa-paw"></i> WELCOME TO PET SHOP <i class="fa-solid fa-paw"></i></h1> <br></br>
        <div className="Cart">
          <h1>{item.name}</h1>
          <p>Price: ${item.price}</p>
          <img src={item.image} />
          <p>{item.detail}</p>
        </div>
        <Comment id={item._id} />
        <Footer />
      </div>) : (<Login />)}
    </div>
  )
}

export default Detail