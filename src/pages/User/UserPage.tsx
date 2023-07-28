import React, { useEffect, useState } from "react";
import CardInfo from "../../components/card/CardInfo";
import LineChart from "../../components/analytic/LineChart";
import PieChart from "../../components/analytic/PieChart";
import UserProfile from "../../components/user/UserProfile";
import BarChart from "../../components/analytic/BarChart";
import StatisticsBox from "../../components/analytic/StatisticsBox";

type UserType = {
  user_name: string;
  user_email: string;
  password: string;
  phone_num: string;
  user_photo: string;
};

type CardType = {
  card_name: string;
  card_email: string;
  phone_num: string;
  card_intro: string;
  card_photo: string;
};

const UserPage: React.FC = () => {
  const [showCardInfo, setShowCardInfo] = useState<boolean>(true);
  const [showChart, setShowChart] = useState<boolean>(false);

  const [userData, setUserData] = useState<UserType>({
    user_name: "",
    user_email: "",
    password: "",
    phone_num: "",
    user_photo: "",
  });

  const [cardData, setCardData] = useState<CardType>({
    card_name: "",
    card_email: "",
    phone_num: "",
    card_intro: "",
    card_photo: "",
  });

  const userId = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch("/api/v1/users/info/" + userId);
        const cardResponse = await fetch("/api/v1/cards/info/" + userId);

        if (!userResponse.ok || !cardResponse.ok) {
          throw new Error("Network response was not ok.");
        }

        const userData: { message: string; result: UserType } = await userResponse.json();
        const cardData: { message: string; result: CardType } = await cardResponse.json();

        setUserData(userData.result);
        setCardData(cardData.result);
      } catch (error) {
        console.error("데이터를 불러오는데 오류가 발생했습니다:", error);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = (component: string) => {
    setShowCardInfo(component === "cardInfo");
    setShowChart(component === "chart");
  };

  return (
    <div className="flex w-screen h-screen bg-rememberWhiteHover">
      <div className="ml-12 mr-12">
        <UserProfile
          name={userData.user_name}
          email={userData.user_email}
          phoneNumber={userData.phone_num}
          passwd={userData.password}
          photo={userData.user_photo}
        />
        <div className="flex justify-between items-center w-[270px]">
          <button
            onClick={() => handleButtonClick("cardInfo")}
            type="button"
            className="w-[130px] h-[50px] flex justify-center items-center text-[13px] text-rememberBlack hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-rememberBlue dark:focus:ring-rememberBlueActive"
          >
            Card
          </button>
          <button
            onClick={() => handleButtonClick("chart")}
            type="button"
            className="w-[130px] h-[50px] flex justify-center items-center text-[13px] text-rememberBlack hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-rememberBlue dark:focus:ring-rememberBlueActive"
          >
            Analytic
          </button>
        </div>
      </div>
      {showCardInfo && cardData && (
        <div className="flex flex-col my-10">
          <CardInfo
            name={cardData.card_name}
            email={cardData.card_email}
            phoneNumber={cardData.phone_num}
            introduction={cardData.card_intro}
            photo={cardData.card_photo}
          />
        </div>
      )}
      {showChart && (
        <div className="flex justify-center mt-10">
          <div className="flex flex-col">
            <div className="w-full h-[150px] mb-[20px] flex">
              <div
                className={`shadow-md p-4 flex flex-col items-center justify-around w-[150px] h-[150px] bg-white/50 rounded-xl mr-[20px]`}
              >
                <div className="text-gray-600 text-center text-[13px] flex justify-center items-center font-semibold">
                  Today's Views
                </div>
                <div className="text-gray-800 text-[25px] flex justify-center items-center font-semibold">
                  300
                </div>
              </div>
              <div
                className={`shadow-md p-4 flex flex-col items-center justify-around w-[150px] h-[150px] bg-blue-300/50 rounded-xl mr-[20px]`}
              >
                <div className="text-black text-center text-[13px] flex justify-center items-center font-semibold">
                  Total Views
                </div>
                <div className="text-black text-[25px] flex justify-center items-center font-semibold">
                  200
                </div>
              </div>
              <div
                className={`shadow-md p-4 flex flex-col items-center justify-around w-[150px] h-[150px] bg-white/50 rounded-xl mr-[20px]`}
              >
                <div className="text-gray-600 text-center text-[13px] flex justify-center items-center font-semibold">
                  Today's Added Cards
                </div>
                <div className="text-gray-800 text-[25px] flex justify-center items-center font-semibold">
                  100
                </div>
              </div>
              <div
                className={`shadow-md p-4 flex flex-col items-center justify-around w-[150px] h-[150px] bg-blue-300/50 rounded-xl mr-[20px]`}
              >
                <div className="text-black text-center text-[13px] flex justify-center items-center font-semibold">
                  Total Number of Cards Added
                </div>
                <div className="text-black text-[25px] flex justify-center items-center font-semibold">
                  400
                </div>
              </div>
            </div>
            <LineChart />
          </div>
          <div className="flex flex-col">
            <div className="mb-[20px]">
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