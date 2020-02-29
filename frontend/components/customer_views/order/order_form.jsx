import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMenuItems,
  fetchSelectedMenuItems,
  clearMenuItems
} from "../../../actions/menu_item_actions";
import {
  fetchCompany,
  clearCompanies,
  clearErrors
} from "../../../actions/company_actions";
import { Formik, FieldArray, Field } from "formik";
import * as Yup from "yup";
import OrderFormMenu from "./order_form_menu";

import DatePicker, { addMonths } from "react-datepicker";
import { createOrder } from "../../../util/order_api_util";

export default function OrderForm(props) {
  const dispatch = useDispatch();

  const companyString = props.match.params.companyString;

  const [company, setCompany] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  let errors = useSelector(state => state.errors.modifiers.errors);
  let mappedErrors = errors.map((err, i) => {
    return <p key={i}>{err}</p>;
  });

  /* fetching the company whose order page we are visiting */
  useEffect(() => {
    dispatch(fetchCompany(companyString)).then(data => {
      setCompany(data.company.data);
    });

    return () => {
      dispatch(clearCompanies());
      dispatch(clearErrors());
      dispatch(clearMenuItems());
    };
  }, []);

  /* fetching the above company's menu items */
  useEffect(() => {
    if (company) {
      dispatch(fetchSelectedMenuItems(company.id)).then(data => {
        setMenuItems(data.menuItems.data);
      });
    }
    return () => {};
  }, [company]);

  const DatePickerField = ({ name, value, onChange }) => {
    return (
      <DatePicker
        selected={(value && new Date(value)) || null}
        minDate={new Date()}
        maxDate={() => addMonths(new Date(), 5)}
        showDisabledMonthNavigation
        showTimeSelect
        timeFormat='hh:mm'
        timeIntervals={15}
        timeCaption='time'
        dateFormat='M/d/yy h:mm aa'
        onChange={val => onChange(name, val)}
      />
    );
  };

  if (menuItems) {
    return (
      <>
        <h1>{company ? company.name : ``}</h1>

        <Formik
          initialValues={{
            company_id: 0,
            contact_name: "",
            contact_phone_number: "",
            contact_email: "",
            company_name: "",
            order_date: new Date(),
            fulfillment_date: new Date(),
            total_price: 0,
            for_delivery: false,
            special_instructions: "",
            items: []
          }}
          validationSchema={Yup.object({
            contact_name: Yup.string().required("Please enter a contact name"),
            contact_phone_number: Yup.string().required(
              "Please enter a phone number"
            ),
            contact_email: Yup.string()
              .email("Please provide a valid email")
              .required("Please enter an email"),
            company_name: Yup.string(),
            order_date: Yup.date().required(),
            fulfillment_date: Yup.date().required(
              "What day is your order for?"
            ),
            total_price: Yup.string(), //.required("Item must have a price")
            for_delivery: Yup.boolean(),
            special_instructions: Yup.string()
          })}
          onSubmit={(values, actions) => {
            values.company_id = company.id;
            createOrder(values);
          }}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor='contact_name'>Contact Name</label>
              <input
                name='contact_name'
                placeholder='A. N. Other'
                {...formik.getFieldProps("contact_name")}
              />
              {formik.touched.contact_name && formik.errors.contact_name ? (
                <div>{formik.errors.contact_name}</div>
              ) : null}
              <br />
              <label htmlFor='contact_phone_number'>Contact Phone Number</label>
              <input
                name='contact_phone_number'
                placeholder='312-875-0066'
                {...formik.getFieldProps("contact_phone_number")}
              />
              {formik.touched.contact_phone_number &&
              formik.errors.contact_phone_number ? (
                <div>{formik.errors.contact_phone_number}</div>
              ) : null}
              <br />
              <label htmlFor='contact_email'>Contact Email</label>
              <input
                name='contact_email'
                placeholder='another@email.com'
                {...formik.getFieldProps("contact_email")}
              />
              {formik.touched.contact_email && formik.errors.contact_email ? (
                <div>{formik.errors.contact_email}</div>
              ) : null}
              <br />
              <label htmlFor='company_name'>Company Name</label>
              <input
                name='company_name'
                placeholder='(Optional)'
                {...formik.getFieldProps("company_name")}
              />
              {formik.touched.company_name && formik.errors.company_name ? (
                <div>{formik.errors.company_name}</div>
              ) : null}
              <br />
              <label htmlFor='fulfillment_date'>
                Select date and time for fulfillment
              </label>
              <DatePickerField
                name='fulfillment_date'
                value={formik.values.fulfillment_date}
                {...formik.getFieldProps("fulfillment_date")}
                onChange={formik.setFieldValue}
              />
              <br />
              <label htmlFor='for_delivery'>Delivery Order?</label>
              {/* Need to get address if so */}
              <input
                name='for_delivery'
                type='checkbox'
                {...formik.getFieldProps("for_delivery")}
              />
              {formik.touched.for_delivery && formik.errors.for_delivery ? (
                <div>{formik.errors.for_delivery}</div>
              ) : null}
              <br />
              <label htmlFor='special_instructions'>
                Special Instructions/Delivery Address
              </label>
              {/* Need to get address if so */}
              <textarea
                name='special_instructions'
                placeholder='If you checked YES for delivery, please provide your address here'
                {...formik.getFieldProps("special_instructions")}
              />
              {formik.touched.special_instructions &&
              formik.errors.special_instructions ? (
                <div>{formik.errors.special_instructions}</div>
              ) : null}
              <br />
              {/* yadda form */}
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

              <FieldArray
                name='items'
                render={arrayHelpers => (
                  <div>
                    {Object.values(menuItems).map(item => (
                      <div key={item.id} style={{ display: "flex" }}>
                        <label>
                          <div>
                            <input
                              name='item'
                              type='checkbox'
                              value={item.id}
                              checked={formik.values.items.includes(item.id)}
                              onChange={e => {
                                console.log(formik.values);
                                if (e.target.checked) {
                                  arrayHelpers.push({
                                    [item.id]: {
                                      quantity: 1,
                                      modifiers: []
                                    }
                                  });
                                } else {
                                  const idx = formik.values.items.indexOf(
                                    item.value
                                  );
                                  arrayHelpers.remove(idx);
                                }
                              }}
                            />
                            <span>{item.name}</span>
                          </div>
                        </label>
                        <label>
                          <div>
                            <input
                              name='quantity'
                              type='number'
                              placeholder='1'
                              onChange={() => {
                                console.log("changed num");
                              }}
                            />
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              />
              <button type='submit' disabled={formik.isSubmitting}>
                Place Your Order!
              </button>
            </form>
          )}
        </Formik>
        <div className='errors-div'>{mappedErrors}</div>

        {/* <OrderFormMenu menuItems={menuItems} /> */}
      </>
    );
  } else {
    return <p>Loading</p>;
  }
}
