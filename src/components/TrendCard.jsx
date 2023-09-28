import React from "react";

const TrendCard = ({ headline, trendingTopic, tweets }) => {
  return (
    <div className="pt-3">
      <h1 className="text-main-color font-bold text-lg cursor-pointer hover:underline">
        {headline}
      </h1>
      <div className="flex gap-4 -mt-1 text-nav-text-color">
        <p>Trending in {trendingTopic}</p>
        <p>{tweets} Tweets</p>
      </div>
    </div>
  );
};

export default TrendCard;
