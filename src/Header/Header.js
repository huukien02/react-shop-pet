import './Header.css'
import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

function Header() {
    const handleSearch = () => {
        var list = document.querySelectorAll('.product')
        console.log(list[0].childNodes[2].childNodes[0].src);
        var arr = []
        var input = document.getElementById('search').value;

        for (let i = 0; i < list.length; i++) {

            if (list[i].childNodes[0].innerText.toUpperCase().includes(input.toUpperCase()) == true) {
                arr.push(list[i]);
            }
        }

        if (arr.length == list.length || arr.length == 0) {
            document.getElementById("table").style.display = "none";
          }


        else if (arr.length > 0) {
            document.getElementById("table").style.display = "block";
            var content = ``
            for (let i = 0; i < arr.length; i++) {
                content +=
                    `
                        <a href="${arr[i].childNodes[2]}">
                            <img src=${arr[i].childNodes[2].childNodes[0].src} width="70" height="70" />
                        </a>
                        <span>${arr[i].childNodes[0].innerText}</span> <br></br>

                    `
            }

            document.getElementById('table').innerHTML = content
        }


    }
   
    return (

        <div className='Header'>

            <div id='table'>
                <a href="#">
                    <img src='https://matpetfamily.com/wp-content/uploads/2021/08/41B229EC-90FF-40E2-9C2A-DDA7B3060CA5-270x270.jpeg' width="90" height="90" />
                </a>
                <span>Pug</span><br></br>
            </div>


            <div className='contact'>
                <i class="fa-solid fa-bell"></i>
                <span> Hotline: (028)7304 0479 hoặc 034 456 6869</span>
            </div>

            <div className='logo'>
                <img src='https://petxinh.cdn.vccloud.vn/wp-content/uploads/2018/09/logo350x120.png' />
                <div className='search'>
                    <input id='search' onInput={() => handleSearch()} placeholder='Enter My Pet ...' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <Link to={"/mycart"}>
                      <i class="fa-solid fa-cart-shopping fa-2x"></i>
                </Link>
            </div>

        </div>
    )
}

export default Header