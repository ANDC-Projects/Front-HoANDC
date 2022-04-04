import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";

import { useSelector } from "react-redux";

export const RegisterForm = () => {
  const activeIndex = useSelector((state) => state.registerReducer.activeIndex);
  return (
    <div className="register-form text-center">
      <h1 className="display-1" style={{ fontWeight: "bold" }}>
        Form
      </h1>
      {activeIndex == 1 ? <Page1 /> : <Page2 />}
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
