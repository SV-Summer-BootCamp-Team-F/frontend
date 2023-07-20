import React, { useEffect, useState } from "react";
import CardInfo from "../../components/card/CardInfo";
import LineChart from "../../components/analytic/LineChart";
import PieChart from "../../components/analytic/PieChart";
import UserProfile from "../../components/user/UserProfile";
import BarChart from "../../components/analytic/BarChart";
import CardPhoto from "../../components/card/CardPhoto";
import StatisticsBox from "../../components/analytic/StatisticsBox";
import axios from "axios";

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

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    passwd: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = "1"; // Replace this with the actual user ID you want to fetch
        const response = await axios.get(`/api/v1/users/info/`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleButtonClick = (component: string) => {
    setShowCardInfo(component === "cardInfo");
    setShowChart(component === "chart");
  };

  const card: Card = {
    name: "Pochacco",
    email: "icecream@gmail.net",
    phoneNumber: "010-0002-0029",
    introduction: "I love banana Ice Cream!",
  };

  return (
    <div className="flex w-screen h-screen bg-rememberWhiteHover">
      <div className="ml-36 mr-36">
        <UserProfile
          name={userData.name}
          email={userData.email}
          phoneNumber={userData.phoneNumber}
          passwd={userData.passwd}
        />
        <div className="flex justify-between items-center w-[270px] mt-12">
          <button
            onClick={() => handleButtonClick("cardInfo")}
            type="button"
            className="w-[130px] h-[50px] text-[13px] text-rememberBlack hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-rememberBlue dark:focus:ring-rememberBlueActive"
          >
            Card
          </button>
          <button
            onClick={() => handleButtonClick("chart")}
            type="button"
            className="w-[130px] h-[50px] text-[13px] text-rememberBlack hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-rememberBlue dark:focus:ring-rememberBlueActive"
          >
            Analytic
          </button>
        </div>
      </div>
      {showCardInfo && (
        <div className="flex flex-col mt-10">
          <div className="w-[600px] mb-12">
            <CardPhoto />
          </div>
          <CardInfo
            name={card.name}
            email={card.email}
            phoneNumber={card.phoneNumber}
            introduction={card.introduction}
          />
        </div>
      )}
      {showChart && (
        <div className="flex justify-center mt-10">
          <div className="flex flex-col">
            <div className="w-full h-[150px] mb-10 flex">
              <StatisticsBox color="rememberBlue" title="Today's View" number={300} />
              <StatisticsBox color="rememberBlue" title="Today's View" number={200} />
              <StatisticsBox color="rememberBlue" title="Today's View" number={100} />
              <StatisticsBox color="rememberBlue" title="Today's View" number={400} />
            </div>
            <LineChart />
          </div>
          <div className="flex flex-col">
            <div className="mb-10">
              <PieChart />
            </div>
            <BarChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
