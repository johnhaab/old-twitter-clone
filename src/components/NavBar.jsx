import React from "react";
import {
  BiSolidHomeCircle,
  BiSolidBell,
  BiSolidMessageAlt,
} from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="border-b-2 border-nav-border-color">
      <div className="flex justify-between items-center text-nav-text-color text-md lg:ml-96 lg:mr-96 md:ml-40 md:mr-40">
        <section id="left-side-nav" className="flex gap-4">
          <div
            id="home-btn"
            className={`flex justify-center items-center px-2 gap-1 cursor-pointer ${
              window.location.pathname.includes("/home")
                ? "border-b-4 border-b-main-color py-3"
                : ""
            }`}
          >
            <BiSolidHomeCircle />
            <p>Home</p>
          </div>
          <div
            id="noti-btn"
            className={`flex justify-center items-center px-2 gap-1 cursor-pointer ${
              window.location.pathname === "/Notifications" ? "active" : ""
            }`}
          >
            <BiSolidBell />
            <p>Notifications</p>
          </div>
          <div
            id="msg-btn"
            className={`flex justify-center items-center px-2 gap-1 cursor-pointer ${
              window.location.pathname === "/Messages" ? "active" : ""
            }`}
          >
            <BiSolidMessageAlt />
            <p>Messages</p>
          </div>
          <div
            id="me-btn"
            className="flex justify-center items-center gap-1 cursor-pointer"
          >
            <BsFillPersonFill />
            <p>Me</p>
          </div>
        </section>
        <img
          src={Logo}
          alt="Twitter logo"
          width={35}
          height={35}
          className="cursor-pointer"
        />
        <section id="right-side-nav" className="flex gap-4">
          <div
            id="search-box-btn"
            className="flex items-center justify-center border rounded-full py-1 px-3 text-sm border-search-border-color bg-main-bg"
          >
            <input
              type="search"
              name="search-box"
              id="search-box"
              placeholder="Search Twitter"
              className="outline-none focus:border-transparent focus:ring-0 bg-main-bg"
            />
            <AiOutlineSearch />
          </div>
          <div id="social-icon-btn">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="pfp"
              width={35}
              height={35}
              className="rounded-md cursor-pointer"
            />
          </div>
          <div
            id="tweet-btn"
            className="flex items-center cursor-pointer justify-center bg-main-color text-white-text-color gap-1 py-1 px-3 rounded-md border border-r-tweet-border-color"
          >
            <MdPostAdd />
            <button>Tweet</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
