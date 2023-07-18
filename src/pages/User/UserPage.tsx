import React, { useState } from "react";
import CardInfo from "./components/CardInfo";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import UserProfile from "./components/UserProfile";
import BarChart from "./components/BarChart";

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
  const [showCardInfo, setShowCardInfo] = useState<boolean>(true);
  const [showChart, setShowChart] = useState<boolean>(false);

  const handleButtonClick = (component: string) => {
    setShowCardInfo(component === "cardInfo");
    setShowChart(component === "chart");
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
    <div className="flex flex-col items-center w-screen h-auto bg-blue-400">
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
      {showChart && (
        <div className="flex justify-around">
          <div className="flex flex-col">
            <div className="w-full h-80 rounded-3xl bg-white"></div>
            <LineChart />
          </div>
          <div className="flex flex-col">
            <PieChart />
            <BarChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
