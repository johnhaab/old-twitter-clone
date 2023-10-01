import React, { Component } from "react";
import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNav";
import UserPreview from "./components/UserPreview";
import TrendsBox from "./components/TrendsBox";
import MainFeed from "./components/MainFeed";
import WhoToFollowBox from "./components/WhoToFollowBox";

class App extends Component {
  state = {
    randomUsers: null,
  };

  componentDidMount() {}

  render() {
    console.log(this.state.randomUsers + "app");

    return (
      <main className="max-h-screen overflow-hidden">
        <NavBar />
        <div className="bg-homepage-color">
          <section className="min-h-screen overflow-hidden flex flex-col md:flex-row items-center md:items-start md:justify-between pt-3 lg:ml-20 lg:mr-20 xl:ml-24 xl:mr-24 2xl:ml-60 2xl:mr-60">
            <section id="left-homepage" className="hidden md:block">
              <UserPreview />
              <TrendsBox />
            </section>
            <section>{/* User side bar on SM screen sizes up to MD */}</section>
            <section id="middle-homepage">
              <MainFeed />
            </section>
            <section>{/* Search bar on SM screen sizes up to MD */}</section>
            <section id="right-homepage" className="hidden xl:block">
              <div className="hidden md:block">
                <WhoToFollowBox />
              </div>
              <p className="text-sm pt-4 text-nav-text-color">
                © 2015 Twitter{" "}
                <span className="hover:underline cursor-pointer">About </span>
                <span className="hover:underline cursor-pointer">Help </span>
                <span className="hover:underline cursor-pointer">Terms </span>
                <span className="hover:underline cursor-pointer">Privacy</span>
              </p>
            </section>
          </section>

          <div className="fixed bottom-0 left-0 right-0 flex justify-center block md:hidden ">
            <div id="bottom-nav" className="block md:hidden">
              <BottomNav />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
