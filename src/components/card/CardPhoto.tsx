import React from "react";

type CardPhotoProps = {
  card_photo: string;
};

const CardPhoto: React.FC<CardPhotoProps> = ({ card_photo }) => {
  return (
    <div className="w-full">
      <img className="w-[500px] h-[300px]" src={card_photo} alt="Card Photo" />
    </div>
  );
};

export default CardPhoto;
