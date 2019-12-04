import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/session_actions";
import { Formik } from "formik";
import * as Yup from "yup";

export default function LoginForm(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            // THIS COMMENTED OUT FOR TESTING 123@123.123
            // .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required")
        })}
        onSubmit={(values, actions) => {
          dispatch(login(values)).then(() => {
            actions.setSubmitting(false); // not required for async functions, will auto set to false in that case
            // push new page to history to redirect
          });
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>Email Address</label>
            <input
              name='email'
              autoComplete='email'
              // formik.getFieldProps shorthands onChange, onBlur, value, and checked:
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
          </form>
        )}
      </Formik>
    </>
  );
}
