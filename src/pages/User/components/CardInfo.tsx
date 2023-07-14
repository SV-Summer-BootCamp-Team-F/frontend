import React from "react";

const CardInfo = ({ name, email, phoneNumber, introduction }) => {
  return (
    <div style={{ border: "1px solid black", borderRadius: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "40px",
        }}
      >
        <h2>{name}</h2>
        <div>
          <p>Email: {email}</p>
          <p>Phone: {phoneNumber}</p>
          <p>Introduction: {introduction}</p>
        </div>
        <button style={{ color: "white", borderRadius: "20px" }}>Edit Card</button>
      </div>
    </div>
  );
};

export default CardInfo;
