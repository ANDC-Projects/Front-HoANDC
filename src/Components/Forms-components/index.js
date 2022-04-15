import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { BasicInfo } from "./BasicInfo";
import { HigherEducation } from "./HigherEducation";
import { WorkExperience } from "./WorkExperience";
import { ContactInfo } from "./ContactInfo";
import "./forms.css";
import { useSelector, useDispatch } from "react-redux";
import { setActiveIndex } from "./dependencies/actions/setActiveIndex";

export const RegisterForm = () => {
  const activeIndex = useSelector((state) => state.registerReducer.activeIndex);
  const dispatch = useDispatch();
  const [header, setheader] = useState("Personal Info");
  return (
    <div className="register-form text-center">
      <h3 className="display-3" style={{ fontWeight: "bold" }}>
        Sign In
      </h3>
      <div className="form-parent-box">
        {activeIndex == 1 && <BasicInfo />}
        {activeIndex == 2 && <HigherEducation />}
        {activeIndex == 3 && <WorkExperience />}
        {activeIndex == 4 && <ContactInfo />}

        {/* <BasicInfo />
        <HigherEducation />
        <WorkExperience />
        <ContactInfo /> */}
      </div>

      {/* <br />
      {activeIndex > 1 && (
        <button
          type="submit"
          className="btn btn-danger journey-button"
          onClick={() => {
            dispatch(setActiveIndex(-1));
          }}
        >
          Previous
        </button>
      )}
      <button
        type="submit"
        className="btn btn-danger journey-button"
        onClick={() => {
          dispatch(setActiveIndex(1));
        }}
      >
        {activeIndex >= 4 ? "Finish" : "Next"}
      </button> */}
    </div>
  );
};

//     <Router>
//   <Switch>
//     <Route exact path="/" component={Page1} />
//     <Route exact path="/page2" component={Page2} />
//     <Route exact path="/page3" component={Page3} />
//   </Switch>
// </Router>
