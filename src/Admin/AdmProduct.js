import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './AdmProduct.css'

function AdmProduct() {

  const [btn, setBtn] = useState(true)
  const [product, setProduct] = useState([])

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [detail, setDetail] = useState('')
  const [id, setId] = useState('')


  useEffect(() => {
    async function getData() {
      const res = await axios.get('/api/listpet');
      return res;
    }
    getData().then((res) => setProduct(res.data))
  }, [])


  const handleAddProduct = () => {

    axios.post('/admin/addproduct', {
      name: name,
      price: price,
      image: image,
      detail: detail

    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.reload();
  }

  const EDIT = (id, name, price, image, detail) => {
    setId(id)
    setName(name)
    setPrice(price)
    setImage(image)
    setDetail(detail)

    setBtn(prev => !prev)

    var form = document.querySelector('.Form');
    form.style.display = 'block'
  }

  const handleAddEdit = () => {
    axios.post('/edit/product', {
      name: name,
      price: price,
      image: image,
      detail: detail,
      id: id
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload();
  }

  const closeForm = () => {
    var form = document.querySelector('.Form');
    form.style.display = 'none'
  }

  const openForm = () => {
    var form = document.querySelector('.Form');
    form.style.display = 'block'

    setName('')
    setPrice('')
    setImage('')
    setDetail('')
  }

  const handleDelete = (id) => {
    if (window.confirm('Bạn muốn xóa Sản Phẩm này không ? ')) {
      // window.location = `http://localhost:4000/delete/product/${id}`
      window.location = `https://my-project-mongo-2022.herokuapp.com/delete/product/${id}`
    }
  }




  return (
    <div>

      <div className='Form'>
        <div className='Add-Form'>
          <i onClick={closeForm} class="fa-solid fa-square-xmark fa-2x"></i> <br></br><br></br>
          <input
            placeholder='Enter name'
            value={name}
            onChange={e => setName(e.target.value)}
          />  <br></br>
          <input
            placeholder='Enter price'
            value={price}
            onChange={e => setPrice(e.target.value)}
          />  <br></br>
          <input
            placeholder='Enter Link image'
            value={image}
            onChange={e => setImage(e.target.value)}
          />  <br></br>
          <input
            placeholder='Enter detail'
            value={detail}
            onChange={e => setDetail(e.target.value)}
          />  <br></br>
          {btn ? (<button onClick={handleAddProduct}>ADD</button>) : (<button onClick={handleAddEdit}>EDIT</button>)}
        </div>
      </div>


      <i onClick={openForm} class="fa-solid fa-square-plus fa-2x"></i>
      <table className='table'>
        <tr>
          <th>ID</th>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>OTHER</th>
        </tr>
        {product.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td><img src={item.image} /></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <i onClick={() => handleDelete(item._id)} class="fa-solid fa-trash-can"></i>
                <i onClick={() => EDIT(item._id, item.name, item.price, item.image, item.detail)} class="fa-solid fa-pen-to-square"></i>
              </td>
            </tr>
          )
        })}
      </table>
    </div>

  )
}

export default AdmProduct