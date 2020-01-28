import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompany, clearCompanies } from "../../../actions/company_actions";

import {
  fetchMenuItems,
  clearMenuItems
} from "../../../actions/menu_item_actions";
import {
  fetchModifiers,
  clearModifiers
} from "../../../actions/modifier_actions";

export default function OrderFormMenu(props) {
  let items;
  console.log("items: ", items);
  // const company = useSelector(state => state.entities.company);
  const dispatch = useDispatch();

  let menuItems;

  useEffect(() => {
    // dispatch(fetchCompany(props.companyString));
    // dispatch(fetchMenuItems());
    items = props.menuItems;
    console.log("items: ", items);

    return () => {
      // dispatch(clearMenuItems());
      // dispatch(clearCompanies());
    };
  }, []);

  if (Object.values(items).length) {
    menuItems = Object.values(items).map(item => {
      return (
        <li className='menu-item' key={item.id}>
          <div>
            <p>{item.name}</p>
            <p>${Number.parseFloat(item.price) / 100}</p>
            <p>Required Notice: {item.required_notice} hours</p>
            <ul>
              {item.modifiers.map(modifier => {
                return (
                  <li key={modifier.id}>
                    <input type='checkbox' />
                    {modifier.name} - add $
                    {Number.parseFloat(modifier.price) / 100}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <label htmlFor='quantity'>Quantity</label>
            <input
              name='quantity'
              type='number'
              placeholder='Select Quantity'
            />
          </div>
        </li>
      );
    });
  }

  if (user) {
    return (
      <div className='inner-grid menu-pane'>
        <h2 className='inner-grid-child menu-pane-label'>Items</h2>
        <div className='inner-grid-child menu-pane-body'>
          <section className='menu-section items'>
            <ul>{menuItems}</ul>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Nobody's home...</h3>
        <Link to='/signup'>Signup</Link>
        <br />
        <Link to='/login'>Login</Link>
      </div>
    );
  }
}
