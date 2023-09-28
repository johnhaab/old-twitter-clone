import React, { Component } from "react";
import NavBar from "./components/NavBar";
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
        <div className="bg-main-bg">
          <section className="min-h-screen overflow-hidden flex justify-between pt-3 lg:ml-96 lg:mr-96 md:ml-40 md:mr-40">
            <section id="left-homepage">
              <UserPreview />
              <TrendsBox />
            </section>
            <section id="middle-homepage">
              <MainFeed />
            </section>
            <section id="right-homepage">
              <WhoToFollowBox />
              <p className="text-sm pt-4 text-nav-text-color">
                © 2015 Twitter{" "}
                <span className="hover:underline cursor-pointer">About </span>
                <span className="hover:underline cursor-pointer">Help </span>
                <span className="hover:underline cursor-pointer">Terms </span>
                <span className="hover:underline cursor-pointer">Privacy</span>
              </p>
            </section>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
