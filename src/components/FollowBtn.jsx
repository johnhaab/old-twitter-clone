import React from "react";
import { FaUserPlus } from "react-icons/fa6";

const FollowBtn = () => {
  return (
    <div className="flex items-center text-nav-text-color py-1 px-4 border border-search-border-color bg-main-bg cursor-pointer w-min rounded-md">
      <FaUserPlus />
      <div>Follow</div>
    </div>
  );
};

export default FollowBtn;
