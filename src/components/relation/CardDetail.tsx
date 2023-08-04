import CardShowModal from "./CardShowModal";

export type CardDetailPropsType = {
  user_photo: string;
  card_name: string;
  card_email: string;
  card_phone: string;
  card_photo: string;
  card_intro: string;
  memo: string;
};

const CardDetail: React.FC<CardDetailPropsType> = (cardData) => {
  // State to store updated user data

  return (
    <div className="flex w-[270px]">
      <div className="flex flex-col items-center w-[270px] max-w-lg mt-12 mb-[40px] bg-white rounded-e-lg shadow-md py-8 px-8 box-border">
        <div>
          <div className="relative">
            <img
              className="w-[170px] h-[170px] rounded-full mx-auto mb-6 object-cover"
              src={cardData.user_photo}
              alt="Profile picture"
            />
          </div>
          <p className="text-center text-[26px] mb-2">{cardData.card_name}</p>
          <div className="flex flex-col w-full mt-8">
            <div>
              <div className="flex">
                <p className=" text-gray-500 text-[13px] mr-2">이메일</p>
                <p className=" text-gray-800 text-[13px] ">{cardData.card_email}</p>
              </div>
              <div className="flex">
                <p className=" text-gray-500 text-[13px] mr-2">전화번호</p>
                <p className=" text-gray-800 text-[13px] ">{cardData.card_phone}</p>
              </div>
              <div className="flex">
                <p className=" text-gray-500 text-[13px] mr-2">소개</p>
                <p className=" text-gray-800 text-[13px] ">{cardData.card_intro}</p>
              </div>
              <hr className="mt-[1px] mb-[14px]"></hr>
              <p className="text-[13px] text-gray-500">Memo</p>
              <p className="text-[13px] text-gray-800">{cardData.memo}안녕하세요</p>
            </div>
          </div>
        </div>
        <CardShowModal card_photo={cardData.card_photo} />
      </div>
    </div>
  );
};
export default CardDetail;
