import React from "react";
import { useDispatch } from "react-redux";
import { setActiveIndex } from "./dependencies/actions/setActiveIndex";
import { Formik, Form, Field, FieldArray } from "formik";
import { FormGroup } from "react-bootstrap";

export const Page2 = () => {
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      Page 2
      <Formik
        initialValues={{
          hasDiploma: "no",
          isPostGrad: "no",
          isPhD: "no",
          isEmployee: "no",
          postGrad: [
            {
              course: "",
              yearOfCompletion: 1947,
              institute: "",
            },
          ],
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            Are you a Post Graduate?
            <br />
            {/* POSTGRADUATION BOOLEAN */}
            <div className="form-group">
              <label>
                <Field
                  className="form-check-input"
                  type="radio"
                  name="isPostGrad"
                  value="yes"
                />
                Yes
              </label>
            </div>
            <div className="form-group">
              <Field
                className="form-check-input"
                type="radio"
                name="isPostGrad"
                value="no"
              />
              <label>No</label>
            </div>
            <FieldArray name="postGrad">
              {({ insert, remove, push }) => (
                <div>
                  {props.values.postGrad.length >= 0 &&
                    props.values.postGrad.map((postGrad, index) => {
                      <div className="form-group" key={index}>
                        Details of your Postgraduation
                        <br />
                        <Field
                          type="text"
                          // className='form-control'
                          name={"postGrad.${index}.course"}
                          // value='course'
                          placeholder="Course"
                        />
                        <br />
                        <Field
                          type="text"
                          // className='form-control'
                          name={"postGrad.${index}.year"}
                          // value='course'
                          placeholder="Year"
                        />
                        <br />
                        <Field
                          type="text"
                          // className='form-control'
                          name={"postGrad.${index}.institute"}
                          // value='course'
                          placeholder="Institute"
                        />
                        <div>
                          <button
                            type="button"
                            className=""
                            onClick={() => remove(index)}
                          >
                            remove
                          </button>
                        </div>
                      </div>;
                    })}
                  <button
                    type="button"
                    className=""
                    onClick={() =>
                      push({ course: "", year: "", institute: "" })
                    }
                  >
                    add
                  </button>
                </div>
              )}
            </FieldArray>
            <br />
            <button
              // type="submit"
              className="btn btn-danger"
              onClick={() => {
                dispatch(setActiveIndex(-1));
              }}
            >
              Previous
            </button>
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
