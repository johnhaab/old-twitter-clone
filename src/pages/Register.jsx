import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      username,
      password1,
      password2,
    };

    console.log(user);

    try {
      const response = await axios.post(
        "http://192.168.1.188:3001/register",
        user
      );

      // Parse JSON response
      const data = response.data;

      // Check for successful response
      if (data.status === "True") {
        // Handle successful account creation
        console.log("Account created!");
        setAccountCreated(true);
        console.log(data.user); // access user data
      } else {
        // Handle unsuccessful response
        console.log(data.error); // access error message
      }
    } catch (err) {
      console.log(err);
    }

    // submit form data
    console.log("Submit");
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto p-4 h-screen">
      <div className="flex items-center justify-between mb-2 min-w-full">
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
            Sign up for twitter
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
          placeholder="Full-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-2 rounded-md border-nav-border-color"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-2 rounded-md border-nav-border-color"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-4 rounded-md border-nav-border-color"
          type="password"
          placeholder="Password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-4 rounded-md border-nav-border-color"
          type="password"
          placeholder="Type your password again"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <div className="flex justify-between min-w-full">
          <button
            className="flex bg-main-color text-white py-2 px-4 rounded-md"
            type="submit"
          >
            Sign up
          </button>
          <Link
            to="/login"
            className="text-dark-text-color text-lg font-semibold hover:text-main-color"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
