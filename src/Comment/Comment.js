import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comment.css'

var name = JSON.parse(localStorage.getItem('name'))
var role = JSON.parse(localStorage.getItem('role'))



function Comment(props) {
  const [cmt, setCmt] = useState('')
  const [data, setData] = useState([])



  const handleSend = () => {
    var d = new Date()
    var day = d.getDate()
    var month = (d.getMonth() + 1)
    var year = d.getFullYear()
    var hour = d.getHours()
    var minute = d.getMinutes()

    axios.post('/detail/cmt', {
      idProduct: props.id,
      cmt: cmt,
      name: name,
      day: day,
      month: month,
      year: year,
      hour: hour,
      minute: minute

    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setCmt('')
    window.location.reload();
  }

  useEffect(() => {
    async function getData() {
      const res = await axios.get('/comment');
      return res;
    }
    getData().then((res) => setData(res.data))
  }, [])

  const listCMT = data.filter((user) => {
    return user.idProduct == props.id;
  })

  const deleteCMT = (id, username) => {
    if (name == 'admin') {
      if (window.confirm('Bạn muốn xóa bình luận này không ? ')) {
        window.location = `https://my-project-mongo-2022.herokuapp.com/delete/cmt/${id}`
      }
    }
    else if (username == name) {
      if (window.confirm('Bạn muốn xóa bình luận này không ? ')) {
        window.location = `https://my-project-mongo-2022.herokuapp.com/delete/cmt/${id}`
      }
    }
    else {
      alert('Bạn không được xóa comment này')
    }
  }


  return (
    <div style={{ paddingTop: 100 }}> <br></br><br></br><br></br>
      <span style={{ paddingLeft: 50 }}>Nhận xét của bạn: </span>
      <input
        id='input-cmt'
        placeholder='Please comment '
        value={cmt}
        onChange={(e) => setCmt(e.target.value)}
      /><i class="fa-solid fa-pen"></i>
      <button id='submit-cmt' onClick={handleSend}>Gửi</button>

      <br></br><br></br><br></br>

      {listCMT.map((item) => {
        return (
          <div className='detail-cmt'>
            <p className='nameCMT'>{item.name} :</p>
            <p className='CMT'>{item.cmt}</p>
            <p className='dateCMT'>({item.day}/{item.month}/{item.year} - {item.hour}:{item.minute})</p>
            <p className='del-cmt'><i onClick={() => deleteCMT(item._id, item.name)} class="fa-solid fa-trash-can"></i></p>
          </div>
        )
      })}

      <div id='table-cmt'>

      </div>
    </div>
  )
}

export default Comment
