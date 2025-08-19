import React from "react";
interface User{
  firstName: string
  lastName: string
}
function formatName(user:User):string {
  return user.firstName + " " + user.lastName;
}
export default function App() {
  const user:User = {
    firstName: "Đào Xuân",
    lastName: "Khánh",
  };
  return (
    <div style={{fontFamily: "Arial" }}>
      <h2>Thông tin người dùng</h2>
      <p>Họ và tên: <b>{formatName(user)}</b></p>
    </div>
  );
}
