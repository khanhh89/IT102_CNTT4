import React from 'react'

export default function UserInfo() {
    const userInfo =  {
            name: "khanh",
            sex: "nam",
            date: "13/01/2006",
            Email: "khanh@gmail.com",
            Address: "Hà Nội"
    }
    
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>Họ và tên: <b>{userInfo.name}</b></li>
        <li>Giới tính: <b>{userInfo.sex}</b></li>
        <li>Ngày sinh: <b>{userInfo.date}</b></li>
        <li>Email: <b>{userInfo.Email}</b></li>
        <li>Địa chỉ: <b>{userInfo.Address}</b></li>
      </ul>
    </div>
  )
}
