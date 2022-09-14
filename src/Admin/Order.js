import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Order.css'

function Order() {
    const [order, setOrder] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await axios.get('/api/order');
            return res;
        }
        getData().then((res) => setOrder(res.data))
    }, [])


    const confirmOrder = (id) => {
        if (window.confirm("Bạn muốn xác nhận đơn hàng này không ?")) {
            // window.location = `http://localhost:4000/delete/order/${id}`
            window.location = `https://my-project-mongo-2022.herokuapp.com/delete/order/${id}`
        }
    }


    const detailOrder = (index) => {
        if (window.confirm("Bạn muốn xem chi tiết đơn hàng này không ?")) {
            document.querySelector('.list-detail').style.display = 'block'
            var listOrder = JSON.parse(order[index].listOrder);

            var content = `<tr>
                <th>ID</th>
                <th>NAME</th>
                <th>IMAGE</th>
                <th>PRICE</th>
            </tr>`

            for (let i = 0; i < listOrder.length; i++) {
                content += `<tr>
                <td>${i + 1}</td>
                <td>${listOrder[i].name}</td>
                <td><img src=${listOrder[i].img}></td>
                <td>${listOrder[i].price}</td>
            </tr>`

            }
            document.getElementById('listOrder').innerHTML = content;
        }



    }

    const closeList = () => {
        document.querySelector('.list-detail').style.display = 'none'
    }


    return (
        <div>
            <table style={{ marginLeft: 150 }} className='table'>
                <tr>
                    <th>ID</th>
                    <th>ACCOUT</th>
                    <th>FULLNAME</th>
                    <th>ADDRESS</th>
                    <th>PHONE</th>
                    <th>TOTAL</th>
                    <th>NOTE</th>
                    <th>ORTHER</th>
                </tr>
                {order.map((item, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.accout}</td>
                            <td>{item.fullname}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>${item.tong}</td>
                            <td>{item.note}</td>

                            <td>
                                <i onClick={() => confirmOrder(item._id)} class="fa-solid fa-circle-check"></i>
                                <i onClick={() => detailOrder(index)} class="fa-solid fa-pen-to-square"></i>
                            </td>
                        </tr>
                    )
                })}
            </table> <br></br>
            <div className='list-detail'>
                <h2><i onClick={closeList} class="fa-solid fa-square-xmark"></i></h2>
                <table id='listOrder' className='table'></table>
            </div>

        </div>
    )
}

export default Order