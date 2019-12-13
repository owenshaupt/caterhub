import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createMenuItem } from "../../actions/menu_item_actions";
import { clearErrors } from "../../actions/session_actions";
import { Formik } from "formik";
import * as Yup from "yup";

export default function NewModifierForm(props) {
  const user = useSelector(state => state.entities.users[state.session.id]);
  const dispatch = useDispatch();

  // let errors = useSelector(state => state.errors.modifiers.errors);
  // let mappedErrors = errors.map((err, i) => {
  //   return <p key={i}>{err}</p>;
  // });

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, []);

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
          name: Yup.string().required("Item must have a name"),
          price: Yup.number()
            // Price must be price format??
            .min(0)
            .required("Item must have a price"),
          required_notice: Yup.number().required(
            "Item must have required notice (if no notice needed, use 0"
          )
        })}
        onSubmit={(values, actions) => {
          dispatch(createMenuItem(values)).then(res => {
            if (res.type === "RECEIVE_MENU_ITEM_ERRORS") {
              actions.setSubmitting(false);
            } else {
              props.history.push("/");
            }
          });
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
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
              placeholder='$0.00'
              {...formik.getFieldProps("price")}
              step='0.01'
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
              Add Item to Your Menu
            </button>
          </form>
        )}
      </Formik>
      <div className='errors-div'>{mappedErrors}</div>
      <Link to='/'>Return to Your Menu</Link>
    </>
  );
}
