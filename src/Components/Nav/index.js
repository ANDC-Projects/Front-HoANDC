import React from "react";
import { Link } from "react-router-dom";
import './nav.scss'
import $ from 'jquery';

const hideNav = () => {
  $(".nav").toggleClass("display-none");
}

export const Nav = () => {
  return (
    <div className="nav">
      <h1 className="title">
        <Link to="/">Alumni Database</Link>
      </h1>
      <ul>
        <li>
          <Link to="/" className="btn">Home</Link>
        </li>
        <li>
          <Link to="/admin" className="btn admin-btn">Admin</Link>
        </li>
        <li>
          <Link to="/students" className="btn">Students</Link>
        </li>
        <li>
          <Link to="/register" className="btn">Sign Up</Link>
          /
          <Link to="/login" className="btn btn-outline-danger">Sign In</Link>
        </li>
      </ul>
      {/* <Image src="/vercel.svg" width="100%" height="40vh" /> */}
    </div>
  );
};
