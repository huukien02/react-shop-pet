import React from 'react'
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import LogOut from '../LogOut/LogOut';


var token = document.cookie;

function Sale() {
  return (
    <div>
      {token ? (<div>
        <LogOut />
        <h1>Sale</h1>
        <Footer/>
      </div>) : (<Login/>)}
    </div>

  )
}

export default Sale