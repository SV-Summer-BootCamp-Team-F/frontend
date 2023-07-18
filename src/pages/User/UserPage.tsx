import React, { useState } from "react";
import CardInfo from "./components/CardInfo";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import UserProfile from "./components/UserProfile";

interface User {
  name: string;
  email: string;
  phoneNumber: string;
  passwd: string;
}

interface Card {
  name: string;
  email: string;
  phoneNumber: string;
  introduction: string;
}

const UserPage: React.FC = () => {
  const [showCardInfo, setShowCardInfo] = useState<boolean>(false);
  const [showLineChart, setShowLineChart] = useState<boolean>(false);
  const [showPieChart, setShowPieChart] = useState<boolean>(false);
  const [showStatistics, setShowStatistics] = useState<boolean>(false);

  const handleButtonClick = (component: string) => {
    setShowCardInfo(component === "cardInfo");
    setShowLineChart(component === "chart");
    setShowPieChart(component === "chart");
    setShowStatistics(component === "statistics");
  };

  const user: User = {
    name: "Pochacco",
    email: "pochacco@gmail.com",
    phoneNumber: "010-0002-0029",
    passwd: "*************",
  };

  const card: Card = {
    name: "Pochacco",
    email: "icecream@gmail.net",
    phoneNumber: "010-0002-0029",
    introduction: "I love banana Ice Cream!",
  };

  return (
    <div className="flex flex-col items-center w-screen h-auto">
      <UserProfile
        name={user.name}
        email={user.email}
        phoneNumber={user.phoneNumber}
        passwd={user.passwd}
      />
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
      <div className="flex">
        <div className="flex ml-20 mb-20 mr-20">
          {/* <div className="w-56 h-32">bar</div> */}
          {showLineChart && (
            <div className="flex flex-col items-center mr-10">
              <div className="w-500 h-300">
                <LineChart />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          {showPieChart && (
            <div className="flex flex-col items-center">
              <div className="w-400 h-400">
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
