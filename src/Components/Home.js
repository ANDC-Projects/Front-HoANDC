import React from "react";
import { About } from "./About";
// import Button from '@material-ui/core/Button';
import "./components.scss";
import man from "./media-files/2-guys-standing.png";
import Parallax from "react-rellax";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="home text-center ">
        <div className="container">
          <h1 className="display-1 ">
            Welcome to the Alumni Portal <br />
            of <a href="https://www.andcollege.du.ac.in/" target="_blank" > ANDC</a>.
          </h1>
          <p className="lead">
            Welcome to the prebuild version of our website.
          </p>
          <Link to="/register" className="register-btn btn btn-dark">
            Register Yourself
          </Link>
        </div>
        <div className="imgBox">
          <div className="gradient-box"></div>
          <Parallax speed={2}>
            <img src={man} alt="ANDC1" className="img-fluid" />
          </Parallax>
        </div>
      </div>
      <About />
    </>
  );
};
