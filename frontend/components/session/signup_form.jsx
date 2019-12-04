import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions/session_actions";
import { Formik } from "formik";
import * as Yup from "yup";

export default function SignupForm(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          company_id: "",
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password2: ""
        }}
        validationSchema={Yup.object({
          company_id: Yup.number()
            .positive("Number must be positive")
            .required("Required"),
          first_name: Yup.string().required("Required"),
          last_name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
          // password2: Yup.string().required("Required")
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
            <label htmlFor='company_id'>Company ID</label>
            <input
              name='company_id'
              type='number'
              {...formik.getFieldProps("company_id")}
            />
            <br />

            <label htmlFor='first_name'>First Name</label>
            <input
              name='first_name'
              {...formik.getFieldProps("first_name")}
            />
            <br />

            <label htmlFor='last_name'>Last Name</label>
            <input
              name='last_name'
              {...formik.getFieldProps("last_name")}
            />
            <br />

            <label htmlFor='email'>Email Address</label>
            <input
              name='email'
              autoComplete='email'
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
            
            <label htmlFor='password2'>Confirm Password</label>
            <input
              name='password2'
              type='password'
              autoComplete='password'
              {...formik.getFieldProps("password2")}
            />
            {formik.touched.password2 && formik.errors.password2 ? (
              <div>{formik.errors.password2}</div>
            ) : null}
            <br />

            <button type='submit' disabled={formik.isSubmitting}>
              Signup
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
