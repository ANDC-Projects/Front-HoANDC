import React from "react";
import { Link } from "react-router-dom";
import "./admin.scss";
import { Formik, Form, Field } from "formik";
import GEO1 from "../media-files/geometric1.jpeg";
import { useDispatch } from "react-redux";
import { toggleAdmin } from "../../actions/toggleAdmin";

export const AdminLogin = () => {
  const dispatch = useDispatch();
  return (
    <div className="admin-login">
      <div className="container"></div>
      <div className="login-box">
        <h1>
          Login as
          <br />
          <div style={{ color: "#ab462e" }}>Admin</div>
        </h1>
        <input
          className="form-control"
          type="text"
          name="email"
          placeholder="Email"
          //   value={props.values.email}
          //   onChange={props.handleChange}
        />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Password"
          //   value={props.values.password}
          //   onChange={props.handleChange}
        />
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: "TOGGLE_LOGIN" });
          }}
        >
          <a href="/admin"></a>
          Login
        </button>
      </div>
    </div>
  );
};

{
  /* <Formik
initialValues={{
  email: "",
  password: "",
}}
onSubmit={(values, { setSubmitting }) => {
  console.log(values);
}}
>
{(props) => (
  <Form onSubmit={props.handleSubmit}>
	<input
	  className="form-control"
	  type="text"
	  name="email"
	  placeholder="Email"
	  value={props.values.email}
	  onChange={props.handleChange}
	/>
	<input
	  className="form-control"
	  type="text"
	  name="password"
	  placeholder="Password"
	  value={props.values.password}
	  onChange={props.handleChange}
	/>
	<br />
	<button
	  type="submit"
	  className="btn btn-danger"
	  //   onClick={() => {
	  //     dispatch(setActiveIndex(1));
	  //   }}
	>
	  Login
	</button>
  </Form>
)}
</Formik> */
}
// export default AdminLogin;
