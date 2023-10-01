import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import axios from "axios";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    // submit form data
    e.preventDefault();
    console.log("Submit");

    const user = {
      emailOrUsername,
      password,
    };

    try {
      await axios.post("http://localhost:3001/login", user);
      console.log("User logged in");
    } catch (err) {
      console.log(err + "login error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto p-4 h-screen">
      <div className="flex items-center justify-between mb-2 min-w-full ">
        <div className="flex">
          <img
            src={Logo}
            alt="Twitter logo"
            width={35}
            height={35}
            className="cursor-pointer md:pt-0"
          />
        </div>
        <div className="flex items-center">
          <h1 className="text-dark-text-color text-lg font-semibold">
            Login to twitter
          </h1>
          <h1 className="ml-1 mr-1 text-nav-text-color text-sm"> - </h1>
          <h1 className="text-nav-text-color text-sm">
            (clone made by{" "}
            <span className="hover:text-main-color">
              <a href="https://www.twitter.com/johnlhaab">@johnlhaab</a>
            </span>
            )
          </h1>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center min-w-full"
      >
        <input
          className="w-full border p-2 mb-2 rounded-md border-nav-border-color"
          type="text"
          placeholder="Enter your email or username"
          value={emailOrUsername}
          onChange={(e) => emailOrUsername(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-4 rounded-md border-nav-border-color"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-between min-w-full">
          <button
            className="flex bg-main-color text-white py-2 px-4 rounded-md"
            type="submit"
          >
            Login
          </button>
          <Link
            to="/"
            className="text-dark-text-color text-lg font-semibold hover:text-main-color"
          >
            Don't have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
