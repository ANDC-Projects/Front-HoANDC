import React from "react";
import { Link } from "react-router-dom";
import "./admin.scss";
import { Formik, Form, Field } from "formik";
import GEO1 from "../media-files/geometric1.jpeg";
import { useDispatch } from "react-redux";
import { toggleAdmin } from "../../actions/toggleAdmin";

export const Query = () => {
  const dispatch = useDispatch();
  return (
    <div className="admin-portal">
      <h1>Admin Portal</h1>
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            id="search"
            className="form-control"
            placeholder="Search"
          />
        </div>
        <button type="button" className="btn btn-primary">
          <i class="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </div>
  );
};

// export default AdminLogin;
