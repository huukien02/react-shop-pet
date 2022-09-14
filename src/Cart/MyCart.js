import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer'
import LogOut from '../LogOut/LogOut'
import Login from '../Login/Login';

import axios from 'axios';
import './MyCart.css'

var token = document.cookie;


var name = JSON.parse(localStorage.getItem('name'))
var list = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [];
var tong = 0;
list.map((item) => {
    tong = tong + Number(item.price);
})


function MyCart() {

    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [note, setNote] = useState('')


    const handleDelete = (index) => {


        if (window.confirm('Bạn muốn xóa Sản Phẩm này không ? ')) {
            list.splice(index, 1);
        }

        localStorage.setItem("Cart", JSON.stringify(list))

        window.location.reload()
    }

    const showForm = () => {
        var form = document.querySelector('.parent_form_order');
        form.style.display = 'block'
    }

    const close_Form_Order = () => {
        var form = document.querySelector('.parent_form_order');
        form.style.display = 'none'
    }

    const handleOrder = () => {
        var listOrder = JSON.stringify(list)

        axios.post('/cart', {
            name,
            fullname,
            address,
            phone,
            listOrder,
            note,
            tong

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        localStorage.removeItem('Cart');
        window.location.reload();
    }


    return (
        <div>
            {name ? (<div>
                <LogOut />
                <h1 className='title'><i class="fa-solid fa-paw"></i> WELCOME TO PET SHOP <i class="fa-solid fa-paw"></i></h1> <br></br><br></br>
                <table id='cart_table'>
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>OTHER</th>
                    </tr>
                    {list.map((item, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img src={item.img} width={70} height={70} /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <i onClick={() => handleDelete(index)} class="fa-solid fa-trash-can"></i>
                                </td>
                            </tr>
                        )
                    })}
                </table>
                <h4 className='total'>Total: ${tong}</h4>
                <button className='showForm' onClick={showForm}><span>Đặt Hàng</span></button>
                <div className='parent_form_order'>
                    <div className='form_order'>
                        <i onClick={close_Form_Order} style={{ marginLeft: 510 }} class="fa-solid fa-square-xmark fa-2x"></i> <br></br><br></br>
                        <input
                            placeholder='Enter Name'
                            onChange={(e) => setFullname(e.target.value)}
                            value={fullname}
                        /> <br></br>
                        <input
                            placeholder='Enter Address'
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                        /> <br></br>
                        <input
                            placeholder='Enter Phone'
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        /> <br></br>
                        <input
                            placeholder='Enter Note'
                            onChange={(e) => setNote(e.target.value)}
                            value={note}
                        /> <br></br>
                        <button className='OrderNow' onClick={handleOrder}>ORDER NOW</button>
                    </div>

                </div>
                <Footer />
            </div>) : (<Login />)}
        </div>
    )
}

export default MyCart