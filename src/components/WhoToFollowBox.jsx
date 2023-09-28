import { BsDot } from "react-icons/bs";
import WhoToFollowCard from "../components/WhoToFollowCard";

const whoToFollowData = [
  {
    username: "Amanda743",
    name: {
      first: "Amanda",
      last: "Hansen",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/90.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
    },
  },
  {
    username: "Maxine294",
    name: {
      first: "Maxine",
      last: "Roberts",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/42.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/42.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg",
    },
  },
  {
    username: "Jerry289",
    name: {
      first: "Jerry",
      last: "Smith",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/8.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
    },
  },
];

const WhoToFollowBox = () => {
  console.log(whoToFollowData);

  return (
    <div className="mt-3 p-4 bg-white-text-color border-search-border-color border rounded-md">
      <h1 className="text-2xl text-nav-text-color">Who to follow</h1>
      <div className="flex items-center text-xs pt-1 text-light-text-color">
        <p className="cursor-pointer hover:underline">Refresh</p>
        <BsDot />
        <p className="cursor-pointer hover:underline">View All</p>
      </div>
      <div className="pt-3">
        <WhoToFollowCard user={whoToFollowData[0]} />
        <WhoToFollowCard user={whoToFollowData[1]} />
        <WhoToFollowCard user={whoToFollowData[2]} />
      </div>
    </div>
  );
};

export default WhoToFollowBox;
