import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdmUser() {
  const [user, setUser] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await axios.get('/api/users');
      return res;
    }
    getData().then((res) => setUser(res.data))
  }, [])

  console.log('User: ', user);

  const handleDelete = (id) => {
    if (window.confirm('Bạn muốn xóa User này không ? ')) {
      // window.location = `http://localhost:4000/delete/users/${id}`
      window.location = `https://my-project-mongo-2022.herokuapp.com/delete/users/${id}`
    }
  }

  return (
    <div>
      <table style={{ marginLeft: 250 }} className='table'>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>PASSWORD</th>
          <th>PHONE</th>
          <th>ROLE</th>
          <th>OTHER</th>
        </tr>
        {user.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.phone}</td>
              <td>{item.role}</td>
              <td>
                <i onClick={() => handleDelete(item._id)} class="fa-solid fa-trash-can"></i>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default AdmUser