import TweetBox from "./TweetBox";
import UserPost from "./UserPost";

const MainFeed = () => {
  return (
    <div id="main-container" className="flex flex-col items-center pl-4 pr-4">
      <TweetBox />
      <section id="userfeed" className="">
        <UserPost />
      </section>
    </div>
  );
};

export default MainFeed;
