import React from 'react'

var name = JSON.parse(localStorage.getItem('name'))



function LogOut() {
  const logout = () => {
    if (window.confirm('Bạn muốn đăng xuất không ? ')) {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      window.location.reload();
    }
    localStorage.removeItem('Cart');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
  }
  return (
    <div>
      <h4 onClick={logout} style={{ marginLeft: 1250, cursor: 'pointer' }}>{name ? (<h3>Hello, {name} <i style={{ color: 'red' }} class="fa-solid fa-right-from-bracket"></i></h3>) : (<h3>Please Login</h3>)}</h4>
    </div>
  )
}

export default LogOut