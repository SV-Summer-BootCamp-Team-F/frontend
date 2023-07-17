import React, { useEffect, useState } from "react";
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

  const card = {
    name: "Pochacco",
    email: "icecream@gmail.net",
    phoneNumber: "010-0002-0029",
    introduction: "I love banana Ice Cream!",
  };
  // className="h-screen flex justify-center items-center"
  return (
    <div className="flex flex-col items-center w-screen h-auto">
      <UserProfile />
      <div className="mb-12">
        <button
          onClick={() => handleButtonClick("cardInfo")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Card Info
        </button>
        <button
          onClick={() => handleButtonClick("chart")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Chart
        </button>
      </div>
      {showCardInfo && (
        <CardInfo
          name={card.name}
          email={card.email}
          phoneNumber={card.phoneNumber}
          introduction={card.introduction}
        />
      )}
      <div style={{ display: "flex" }} className="mb-20">
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
  );
};

export default UserPage;
