import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
// import { setActiveIndex } from "../dependencies/actions/setActiveIndex";
// import { useBasicInfo } from "../dependencies/actions/basicInfoActions";
import './login.scss';

export const Login = () => {
  // const activeIndex = useSelector((state) => state.registerReducer.activeIndex);\
  const BasicInfo = useSelector((state) => state.registerReducer.basicInfo);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <div className="student-login">
        <div className="container">
        .
        </div>
        <div className="login-box">
          <h1>
            Login as
            <br />
            <div style={{ color: "#ab462e" }}>student</div>
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
            {/* <a href="/student"></a> */}
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
// <Formik
//   initialValues={{
//     userName: "",
//     password: "",
//   }}
//   onSubmit={(values, { setSubmitting }) => {
//     console.log(values);
//     // setSubmitting(false);
//   }}
// >
//   {(props) => (
//     <Form onSubmit={props.handleSubmit}>
//       <Field
//         className="form-control"
//         type="text"
//         name="userName"
//         placeholder="Username"
//         value={props.values.userName}
//         onChange={props.handleChange}
//       />
//       <Field
//         className="form-control"
//         type="text"
//         name="password"
//         placeholder="Password"
//         value={props.values.password}
//         onChange={props.handleChange}
//       />
//       <br />
//       {/* <button
//         type="submit"
//         className="btn btn-danger"
//       //   onClick={() => {
//       //     dispatch(setActiveIndex(-1));
//       //   }}
//       >
//         Sign Up
//       </button> */}
//       <button
//         type="submit"
//         className="btn btn-danger"
//       //   onClick={() => {
//       //     dispatch(setActiveIndex(1));
//       //   }}
//       >
//         Login
//       </button>
//     </Form>
//   )}
// </Formik>
