import React, { useEffect, useState } from "react";
import CardInfo from "../../components/card/CardInfo";
import LineChart from "../../components/analytic/LineChart";
import PieChart from "../../components/analytic/PieChart";
import UserProfile from "../../components/user/UserProfile";
import BarChart from "../../components/analytic/BarChart";
import StatisticsBox from "../../components/analytic/StatisticsBox";
import axios from "axios";

type UserType = {
  user_name: string;
  user_email: string;
  password: string;
  user_phone: string;
  user_photo: string;
};

type CardType = {
  card_name: string;
  card_email: string;
  card_phone: string;
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
    user_phone: "",
    user_photo: "",
  });

  const [cardData, setCardData] = useState<CardType>({
    card_name: "",
    card_email: "",
    card_phone: "",
    card_intro: "",
    card_photo: "",
  });

  useEffect(() => {
    const user_uuid = localStorage.getItem("user_uuid");
    axios
      .get(`http://127.0.0.1:8000/api/v1/users/info/${user_uuid}/`)
      .then((response) => {
        // 로그인 성공 시 처리
        console.log("유저 정보 불러오기 성공!", response.data);
        const userData: { result: UserType } = response.data;
        console.log("userData", userData.result);
        setUserData(userData.result);
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error("유저 정보 불러오기 실패", error);
        // 예: 에러 메시지 표시 등
      });

    axios
      .get(`http://127.0.0.1:8000/api/v1/cards/info/${user_uuid}/`)
      .then((response) => {
        // 로그인 성공 시 처리
        console.log("카드 정보 불러오기 성공!", response.data);
        const cardData: { result: CardType } = response.data;
        console.log(cardData);
        setCardData(cardData.result);
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error("카드 정보 불러오기 실패", error);
        // 예: 에러 메시지 표시 등
      });
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
          phoneNumber={userData.user_phone}
          passwd={userData.password}
          photo={userData.user_photo}
        />
        <div className="flex justify-between items-center w-[270px]">
          <button
            onClick={() => handleButtonClick("cardInfo")}
            type="button"
            className="shadow-sm w-[130px] h-[50px] flex justify-center items-center text-[13px] text-rememberBlack hover:text-white border border-blue-700 hover:bg-rememberBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-rememberBlue dark:focus:ring-rememberBlueActive"
          >
            Card
          </button>
          <button
            onClick={() => handleButtonClick("chart")}
            type="button"
            className="shadow-sm w-[130px] h-[50px] flex justify-center items-center text-[13px] text-rememberBlack hover:text-white border border-blue-700 hover:bg-rememberBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-rememberBlue dark:focus:ring-rememberBlueActive"
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
            phoneNumber={cardData.card_phone}
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
                  20
                </div>
              </div>
              <div
                className={`shadow-md p-4 flex flex-col items-center justify-around w-[150px] h-[150px] bg-blue-300/50 rounded-xl mr-[20px]`}
              >
                <div className="text-black text-center text-[13px] flex justify-center items-center font-semibold">
                  Total Views
                </div>
                <div className="text-black text-[25px] flex justify-center items-center font-semibold">
                  127
                </div>
              </div>
              <div
                className={`shadow-md p-4 flex flex-col items-center justify-around w-[150px] h-[150px] bg-white/50 rounded-xl mr-[20px]`}
              >
                <div className="text-gray-600 text-center text-[13px] flex justify-center items-center font-semibold">
                  Today's Added Cards
                </div>
                <div className="text-gray-800 text-[25px] flex justify-center items-center font-semibold">
                  7
                </div>
              </div>
              <div
                className={`shadow-md p-4 flex flex-col items-center justify-around w-[150px] h-[150px] bg-blue-300/50 rounded-xl mr-[20px]`}
              >
                <div className="text-black text-center text-[13px] flex justify-center items-center font-semibold">
                  Total Number of Cards Added
                </div>
                <div className="text-black text-[25px] flex justify-center items-center font-semibold">
                  104
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
