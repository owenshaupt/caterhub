import React, { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { Formik } from "formik";
import * as Yup from "yup";

export default function LoginForm(props) {
  // const session = useSelector(state => state.session.id);
  // const dispatch = useDispatch();

  // const handleLogout = e => {
  //   console.log("hitting handleLogout");
  //   e.preventDefault();
  //   dispatch({ type: LOGOUT_CURRENT_USER });
  // };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required")
        })}
        onSubmit={(values, actions) => {
          // change this for actual login form
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false); // not required for async functions, will auto set to false in that case
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>Email Address</label>
            <input
              name='email'
              autoComplete='email'
              // getFieldProps shorthands onChange, onBlur, value, and checked:
              //  => onChange={formik.handleChange}
              //  => onBlur={formik.handleBlur}
              //  => value={formik.values.email}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <br />
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              autoComplete='password'
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <br />
            <button type='submit' disabled={formik.isSubmitting}>
              Login
            </button>
            {/* below is material design button start for future styling */}
            {/* <button
              className='mdc-button'
              type='submit'
              disabled={formik.isSubmitting}
            >
              <div className='mdc-button__ripple'></div>
              <span className='mdc-button__label'>Login</span>
            </button> */}
          </form>
        )}
      </Formik>
      <h3>end of formik</h3>
    </>
  );
}
