import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import "./forms.css";
import { useSelector, useDispatch } from "react-redux";
import { setActiveIndex } from "./dependencies/actions/setActiveIndex";

export const Page1 = () => {
  const activeIndex = useSelector((state) => state.registerReducer.activeIndex);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      {/* {useBasicInfo({ name: "hello", lastName: "kaun" })} */}
      {console.log("this is : ", activeIndex)}
      {}
      Page 1
      <br />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          yearOfGraduation: "",
          course: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <input
              className="form-fields"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={props.values.firstName}
              onChange={props.handleChange}
            />

            <br />

            <input
              className="form-fields"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={props.values.lastName}
              onChange={props.handleChange}
            />

            <br />

            <input
              className="form-fields"
              type="text"
              name="course"
              placeholder="Course"
              value={props.values.course}
              onChange={props.handleChange}
            />

            <br />

            <input
              className="form-fields"
              type="text"
              name="yearOfGraduation"
              placeholder="Year of Graduation"
              value={props.values.yearOfGraduation}
              onChange={props.handleChange}
            />

            <br />

            <input
              className="form-fields"
              type="text"
              name="email"
              placeholder="Email"
              onChange={props.handleChange}
              value={props.values.email}
            />

            <br />
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => {
                dispatch(setActiveIndex(1));
              }}
            >
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
