import React from "react";
import "./about.scss";
import { Numbers } from "./Numbers";
import ANDC1 from "../media-files/andc1.jpg";
import Parallax from "react-rellax";

export const About = () => {
  return (
    <>
      <Numbers />
      <div className="about text-center">
        <div className="img-container">
          <Parallax speed={-1}>
          <img src={ANDC1} alt="ANDC1" className="img-fluid" />
          </Parallax>
        </div>
        <div className="container">
          <h1 className="title" id="about">About ANDC</h1>
          <p className="lead">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
};
