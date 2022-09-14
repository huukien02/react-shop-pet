import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios';
import Footer from '../Footer/Footer';

function SignUp() {

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [pass, setPass] = useState('')
  const [rePass, setRePass] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('user')

  const handleSignUp = () => {
    axios.post('/signup', {
      name: name,
      username: userName,
      password: pass,
      phone: phone,
      role: role

    })
      .then(function (response) {
        alert(response.data)
        setName('')
        setUserName('')
        setPass('')
        setRePass('')
        setPhone('')
      })
      .catch(function (error) {
        alert(error.response.data);
        setName('')
        setUserName('')
        setPass('')
        setRePass('')
        setPhone('')

      });

  }

  return (
    <div>
      <div>
        <h1 className='title'><i class="fa-solid fa-paw"></i> WELCOME TO PET SHOP <i class="fa-solid fa-paw"></i></h1>


        <div className='form-sign'>
          <h1>SIGN UP</h1>

          <input
            placeholder='Enter Name'
            id='name'
            onChange={e => setName(e.target.value)}
            value={name}

          /> <br></br> {name == '' || name.length < 6 ? (<small className='err-input'> Please Enter Name</small>) : (<i style={{ marginLeft: 450 }} class="fa-solid fa-circle-check"></i>)} <br></br>

          <input
            placeholder='Enter Username'
            id='username'
            onChange={e => setUserName(e.target.value)}
            value={userName}

          /><br></br> {userName == '' || userName.length < 6 ? (<small className='err-input'> Please Enter Username</small>) : (<i style={{ marginLeft: 450 }} class="fa-solid fa-circle-check"></i>)} <br></br>

          <input
            type={'password'}
            placeholder='Enter Password'
            id='password'
            onChange={e => setPass(e.target.value)}
            value={pass}
          /><br></br> {pass == '' || pass.length < 6 ? (<small className='err-input'> Please Enter Password</small>) : (<i style={{ marginLeft: 450 }} class="fa-solid fa-circle-check"></i>)}<br></br>

          <input
            type={'password'}
            placeholder='Comfirm Password'
            id='repass'
            onChange={e => setRePass(e.target.value)}
            value={rePass}

          /><br></br> {rePass !== pass || rePass == '' ? (<small className='err-input'> Please Confirm Password</small>) : ('')} <br></br>

          <input
            placeholder='Enter Phone'
            id='phone'
            onChange={e => setPhone(e.target.value)}
            value={phone}

          /><br></br>  {phone == '' ? (<small className='err-input'> Please Enter Username</small>) : (<i style={{ marginLeft: 450 }} class="fa-solid fa-circle-check"></i>)}<br></br>

          {(name == '' || name.length < 6 || userName == '' || userName.length < 6 || pass == '' || pass.length < 6 || phone == '') ?
            (<input className='signup-err' type="submit" value="SIGN UP" />) :

            (<input onClick={() => handleSignUp()} className='signup' type="submit" value="SIGN UP" />)}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default SignUp