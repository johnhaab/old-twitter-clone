import React from "react";
import Banner from "../assets/banner.jpg";

const UserPreview = () => {
  return (
    <div className="bg-white-text-color border-search-border-color border rounded-md">
      <img
        src={Banner}
        alt="banner"
        height={25}
        width={350}
        className="rounded-t-md"
      />
      <section id="user-info" className="p-4 -mt-7">
        <div className="flex">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="pfp"
            height={25}
            width={65}
            className="rounded-md outline outline-white-text-color mr-4"
          />
          <div className="flex flex-col justify-end">
            <h1 className="font-bold text-lg text-dark-text-color">User</h1>
            <p className="text-nav-text-color">@Username</p>
          </div>
        </div>
        <div className="flex justify-between font-bold text-nav-text-color pt-3">
          <div>
            <h1>TWEETS</h1>
            <p className="text-main-color">0</p>
          </div>
          <div>
            <h1>FOLLOWING</h1>
            <p className="text-main-color">0</p>
          </div>
          <div>
            <h1>FOLLOWERS</h1>
            <p className="text-main-color">0</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserPreview;
