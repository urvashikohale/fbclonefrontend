import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { API } from "../backend";

const Home = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    console.log(data);
    if (res.status === 400 || !data) {
      window.alert("INVALID CREDENTIALS");
    } else {
      window.alert("Login Successfully");
      navigate("/homepage");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <h1 className="text-primary">facebook</h1>
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="right">
        <form method="POST" action="">
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email Address or phone number"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
          />
          <div className="">
            <input
              type=""
              name=""
              className="loginBtn"
              value="Log In"
              onClick={loginUser}
            />
          </div>

          {/* <Link to="/login" className="loginBtn">
            Log in
          </Link> */}
          <a href="" className="forget">
            Forgotten password?{" "}
          </a>
          <hr className="line" />
          <div className="signup">
            <Link to="/signup" className="signupBtn">
              Create New Account
            </Link>
          </div>
        </form>

        <p>Create a Page for a celebrity, brand or business</p>
      </div>
    </div>
  );
};

export default Home;
