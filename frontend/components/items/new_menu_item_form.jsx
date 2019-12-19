import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createMenuItem, clearErrors } from "../../actions/menu_item_actions";
import { fetchModifiers, clearModifiers } from "../../actions/modifier_actions";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";

export default function NewMenuItemForm(props) {
  const user = useSelector(state => state.entities.users[state.session.id]);
  const dispatch = useDispatch();

  let errors = useSelector(state => state.errors.menuItems.errors);
  let mappedErrors = errors.map((err, i) => {
    return <p key={i}>{err}</p>;
  });

  let modifiers = useSelector(state => state.entities.modifiers);

  useEffect(() => {
    dispatch(fetchModifiers());

    return () => {
      dispatch(clearErrors());
      dispatch(clearModifiers());
    };
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          company_id: user.id,
          name: "",
          price: "",
          required_notice: 0,
          modifier_ids: []
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Item must have a name"),
          price: Yup.number()
            // Price must be price format??
            .min(0)
            .required("Item must have a price"),
          required_notice: Yup.number().required(
            "Item must have required notice (if no notice is needed, use 0)"
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

            <FieldArray
              name='modifier_ids'
              render={arrayHelpers => (
                <div>
                  {Object.values(modifiers).map(modifier => (
                    <label key={modifier.id}>
                      <div>
                        <input
                          name='modifier'
                          type='checkbox'
                          value={modifier.id}
                          checked={formik.values.modifier_ids.includes(modifier.id)}
                          onChange={e => {
                            if (e.target.checked) {
                              arrayHelpers.push(modifier.id);
                            } else {
                              const idx = formik.values.modifier_ids.indexOf(
                                item.value
                              );
                              arrayHelpers.remove(idx);
                            }
                          }}
                        />
                        <span>{modifier.name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            />

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
