import React from "react";
import { Link } from "react-router-dom";
import "./admin.scss";
import { Formik, Form, Field } from "formik";
import GEO1 from "../media-files/geometric1.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { toggleAdmin } from "../../actions/toggleAdmin";
import { AdminLogin } from "./AdminLogin";
import {Query} from "./Query";

const Admin = () => {
  const adminStatus = useSelector((state) => state.adminStatus);
  return (
    <div>
      {adminStatus ? <Query />: <AdminLogin />}
    </div>
  );
};

export default Admin;
