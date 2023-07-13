import React from "react";

const CardInfo = ({ name, email, phoneNumber, introduction }) => {
  return (
    <div style={{ border: "1px solid black", borderRadius: "20px" }}>
      {/* <div
        style={{
          fontSize: "40px",
          textAlign: "center",
          backgroundColor: "black",
          padding: "10px 15px",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <p style={{ color: "white" }}>Remember</p>
        <p style={{ color: "#7CC7E8" }}>Plus +</p>
      </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "10px",
          height: "180px",
        }}
      >
        <h2>{name}</h2>
        <div>
          <p>Email: {email}</p>
          <p>Phone: {phoneNumber}</p>
          <p>Introduction: {introduction}</p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
