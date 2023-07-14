import React, { useEffect, useState } from "react";
import UserInfo from "./components/UserInfo";
import CardInfo from "./components/CardInfo";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import UserProfile from "./components/UserProfile";

const UserPage = () => {
  const [showCardInfo, setShowCardInfo] = useState(false);
  const [showLineChart, setShowLineChart] = useState(false);
  const [showPieChart, setShowPieChart] = useState(false);

  const handleButtonClick = (component: string) => {
    setShowCardInfo(component === "cardInfo");
    setShowLineChart(component === "chart");
    setShowPieChart(component === "chart");
  };

  const user = {
    avatar: "https://i.pinimg.com/736x/77/c3/ba/77c3ba3d5cb9cbcc9734269054a5d57e.jpg",
    name: "Pochacco",
    email: "banana@naver.com",
    phoneNumber: "010-0002-0029",
    passwd: "************",
  };

  const card = {
    name: "Pochacco",
    email: "icecream@gmail.net",
    introduction: "I love banana Ice Cream!",
  };

  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resizeListener = () => {
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        // minHeight: innerHeight,
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          marginRight: "100px",
        }}
      >
        <UserInfo
          avatar={user.avatar}
          name={user.name}
          email={user.email}
          phoneNumber={user.phoneNumber}
          passwd={user.passwd}
        />
        <button
          onClick={() => handleButtonClick("cardInfo")}
          style={{
            flexBasis: "100px",
            marginTop: "10px",
            marginBottom: "10px",
            color: "white",
            fontSize: "20px",
          }}
        >
          Card Info
        </button>
        <button
          onClick={() => handleButtonClick("chart")}
          style={{ flexBasis: "100px", color: "white", fontSize: "20px" }}
        >
          Chart
        </button>
      </div>
      <div style={{ marginLeft: "20px" }}>
        {showCardInfo && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://www.printrobo.co.kr/cdn/blog/870x531-pb10008.jpg"
              alt="명함 사진"
              style={{
                width: "500px",
                border: "1px solid black",
                borderRadius: "20px",
                marginBottom: "50px",
              }}
            />
            <CardInfo
              name={card.name}
              email={card.email}
              phoneNumber={user.phoneNumber}
              introduction={card.introduction}
            />
            {/* <UserProfile /> */}
          </div>
        )}

        <div style={{ display: "flex" }}>
          {showLineChart && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "50px",
              }}
            >
              <div
                style={{
                  width: "500px",
                  height: "300px",
                }}
              >
                <LineChart />
              </div>
            </div>
          )}

          {showPieChart && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "400px", height: "400px" }}>
                <PieChart />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
