import React from "react";

const UserInfo = ({ avatar, name, email, phoneNumber, passwd }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        border: "1px solid black",
        padding: "30px",
        fontSize: "15px",
      }}
    >
      <img
        src={avatar}
        alt="Avatar"
        style={{ borderRadius: "50%", width: "150px", marginBottom: "20px" }}
      />
      <h2 style={{ fontSize: "20px", marginBottom: "30px" }}>{name}</h2>
      <h1 className="text-3xl font-bold underline">test</h1>
      <div>
        <p>Email: {email}</p>
        <p>Phone: {phoneNumber}</p>
        <p>Passwd: {passwd}</p>
      </div>
    </div>
  );
};

export default UserInfo;
