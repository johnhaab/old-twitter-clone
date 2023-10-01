import React from "react";
import FollowBtn from "./FollowBtn";

const WhoToFollowCard = ({ user, i }) => {
  const data = JSON.stringify(user);
  const formattedData = JSON.parse(data);

  console.log(formattedData);

  return (
    <div className="flex items-center">
      <img
        src={formattedData.picture.thumbnail}
        alt="1"
        className="rounded-md pt-3 cursor-pointer"
      />
      <div className="pl-3">
        <h1 className="flex lg:flex-col 2xl:flex-row font-bold text-dark-text-color cursor-pointer hover:text-main-color">
          {formattedData.name.first + " " + formattedData.name.last}
          <span className="pl-2 font-normal text-nav-text-color">
            @{formattedData.username}
          </span>
        </h1>
        <FollowBtn />
      </div>
    </div>
  );
};

export default WhoToFollowCard;
