import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";

const TweetBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-soft-blue-color p-4 rounded-t-md w-screen md:max-w-lg lg:max-w-lg border border-nav-border-color">
      <img
        src="https://i.etsystatic.com/34732889/r/il/b08942/3768265623/il_fullxfull.3768265623_sji1.jpg"
        alt="pfp"
        width={35}
        height={35}
        className="rounded-md object-fill mr-2"
      />

      <div className="twitter-post-box flex flex-grow">
        {isOpen ? (
          <div className="open-box">
            <textarea
              className="post-textarea"
              placeholder="What's happening?"
            />
            <button className="post-button" onClick={() => setIsOpen(false)}>
              Tweet
            </button>
          </div>
        ) : (
          <div class="relative min-w-full">
            <input
              type="text"
              class="bg-white h-full w-full pr-14 py-2 px-3 rounded-lg focus:outline-none placeholder:cursor-pointer border border-nav-border-color placeholder:text-main-color"
              name=""
              placeholder="What's happening?"
            />
            <span class="absolute top-3 right-5 pl-4 text-main-color cursor-pointer">
              <AiFillCamera />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TweetBox;
