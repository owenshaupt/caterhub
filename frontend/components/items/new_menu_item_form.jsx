import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createMenuItem } from "../../actions/menu_item_actions";
import { Formik } from "formik";
import * as Yup from "yup";

export default function NewMenuItemForm(props) {
  const user = useSelector(state => state.entities.users[state.session.id]);
  const dispatch = useDispatch();

  let errors = useSelector(state => state.errors.menuItems.errors);
  let state = useSelector(state => state);
  console.log(state);
  let mappedErrors = errors.map((err, i) => {
    return <p key={i}>{err}</p>;
  });

  useEffect(() => {
    console.log(errors);

    return () => {
      dispatch(clearErrors());
    };
  }, [errors]); // empty bracket says we aren't tracking anything, only run once

  return (
    <>
      <Formik
        initialValues={{
          company_id: user.id,
          name: "",
          price: "",
          required_notice: 0
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            // .positive("Company IDs positive")
            .required("Item must have a name"),
          price: Yup.number()
            // Price must be price format??
            .required("Item must have a price"),
          required_notice: Yup.number().required(
            "Item must have required notice (if no notice needed, use 0"
          )
        })}
        onSubmit={(values, actions) => {
          console.log("values", values, "actions", actions);
          dispatch(createMenuItem(values)).then(res => {
            if (res.type === "RECEIVE_MENU_ITEM_ERRORS") {
              actions.setSubmitting(false);
            } else {
              props.history.push("/");
            }
          });
        }}
      >
        {/* {formik => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='company_id'>Company ID</label>
            <input
              name='company_id'
              type='number'
              {...formik.getFieldProps("company_id")}
            />
            <br />

            <label htmlFor='first_name'>First Name</label>
            <input name='first_name' {...formik.getFieldProps("first_name")} />
            <br />

            <label htmlFor='last_name'>Last Name</label>
            <input name='last_name' {...formik.getFieldProps("last_name")} />
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

            <button type='submit' disabled={formik.isSubmitting}>
              Signup
            </button>
          </form>
        )} */}

        {formik => (
          <form onSubmit={formik.handleSubmit}>
            {/* <label htmlFor='company_id'></label>
            <input
              type='number'
              name='company_id'
              value={user.id}
              {...formik.getFieldProps("company_id")}
            /> */}

            <label htmlFor='name'>Item Name</label>
            <input name='name' {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
            <br />

            <label htmlFor='price'>Price</label>
            <input
              name='price'
              type='number'
              {...formik.getFieldProps("price")}
            />
            {formik.touched.price && formik.errors.price ? (
              <div>{formik.errors.price}</div>
            ) : null}
            <br />

            <label htmlFor='required_notice'>Required Notice</label>
            <input
              name='required_notice'
              type='number'
              {...formik.getFieldProps("required_notice")}
            />
            {formik.touched.required_notice && formik.errors.required_notice ? (
              <div>{formik.errors.required_notice}</div>
            ) : null}
            <br />

            <button type='submit' disabled={formik.isSubmitting}>
              Add Item to Menu
            </button>
          </form>
        )}
      </Formik>
      <div className='errors-div'>{mappedErrors}</div>
    </>
  );
}
