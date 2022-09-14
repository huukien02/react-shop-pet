import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import Footer from '../Footer/Footer'

function Login() {

  const [acc, setAcc] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = () => {
    axios.post('/login', {
      username: acc,
      password: pass
    })
      .then(function (response) {

        console.log(response.data);

        // var token = response.data._id;
        var token = response.data.token;
        var name = response.data.username;
        var role = response.data.role;

        localStorage.setItem('name', JSON.stringify(name))
        localStorage.setItem('role', JSON.stringify(role))

        document.cookie = `${token}`;

        alert('Login thành công')
        if (role == 'admin') {
          window.location = '/admin'
        }
        else {
          window.location = '/'
        }
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data)
        setAcc('')
        setPass('')
      });
  }

  return (
    <div>
      <h1 className='title'><i class="fa-solid fa-paw"></i> WELCOME TO PET SHOP <i class="fa-solid fa-paw"></i></h1>


      <div className='form'>
        <h1>LOGIN</h1>
        <label for=""><i class="fa-solid fa-user"></i></label>
        <input
          placeholder='Enter Username'
          id='tk'
          onChange={e => setAcc(e.target.value)}
          value={acc}
        /><br></br>  {acc == '' ? (<small className='acc-err'> Please Enter Username</small>) : ('')} <br></br>
        <label for=""><i class="fa-solid fa-lock"></i></label>
        <input
          type={'password'}
          placeholder='Enter Password'
          id='mk'
          onChange={e => setPass(e.target.value)}
          value={pass}
        /> <br></br>{pass == '' ? (<small className='pass-err'> Please Enter Password</small>) : ('')} <br></br>

        {(acc == '' || pass == '') ?
          (<input className='submit-err' type="submit" value="LOGIN" />) :

          (<input className='submit' onClick={handleLogin} type="submit" value="LOGIN" />)}
      </div>
      <Footer />


    </div>
  )
}

export default Login