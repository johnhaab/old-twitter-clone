import React from "react";
import { BsDot } from "react-icons/bs";
import TrendCard from "../components/TrendCard";

const trendingData = {
  "GPT-4V": {
    TrendingTopic: "Technology",
    Tweets: "3,343",
  },
  OpenAI: {
    TrendingTopic: "OpenAI",
    Tweets: "30K",
  },
  Bangalore: {
    TrendingTopic: "Bangalore",
    Tweets: "12.3K",
  },
  Vivek: {
    TrendingTopic: "Politics",
    Tweets: "22k",
  },
  "Counter-Strike 2": {
    TrendingTopic: "Gaming",
    Tweets: "21.5K",
  },
  "#Meta": {
    TrendingTopic: "Technology",
    Tweets: "3,162",
  },
  CSGO: {
    TrendingTopic: "Gaming",
    Tweets: "1,634",
  },
};

const TrendsBox = () => {
  const trendingDataArray = Object.entries(trendingData);

  return (
    <div className="mt-3 p-4 bg-white-text-color border-search-border-color border rounded-md">
      <h1 className="text-2xl text-nav-text-color">Trends</h1>
      <div className="flex items-center text-xs pt-1 text-light-text-color">
        <p className="cursor-pointer hover:underline">Refresh</p>
        <BsDot />
        <p className="cursor-pointer hover:underline">View All</p>
      </div>
      {trendingDataArray.map(([topic, data]) => (
        <TrendCard
          key={topic}
          headline={topic}
          tweets={data.Tweets}
          trendingTopic={data.TrendingTopic}
        />
      ))}
    </div>
  );
};

export default TrendsBox;
