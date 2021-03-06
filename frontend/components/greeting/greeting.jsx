import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/session_actions";
import {
  fetchMenuItems,
  deleteMenuItem,
  clearMenuItems
} from "../../actions/menu_item_actions";
import {
  fetchModifiers,
  clearModifiers,
  deleteModifier
} from "../../actions/modifier_actions";

export default function Greeting(props) {
  const user = useSelector(state => state.entities.users[state.session.id]);
  const items = useSelector(state => state.entities.menuItems);
  const modifiers = useSelector(state => state.entities.modifiers);
  const dispatch = useDispatch();

  let menuItems;
  let menuModifiers;

  useEffect(() => {
    dispatch(fetchMenuItems());
    dispatch(fetchModifiers());

    return () => {
      dispatch(clearMenuItems());
      dispatch(clearModifiers());
    };
  }, []);

  function handleMenuItemDelete(id) {
    dispatch(deleteMenuItem(id, user.id)).then(dispatch(fetchMenuItems()));
  }

  function handleModifierDelete(id) {
    dispatch(deleteModifier(id, user.id)).then(dispatch(fetchModifiers()));
  }

  if (Object.values(items).length) {
    menuItems = Object.values(items).map(item => {
      return (
        <li className='menu-item' key={item.id}>
          <p>Item: {item.name}</p>
          <p>Price: ${Number.parseFloat(item.price) / 100}</p>
          <p>Required Notice: {item.required_notice}</p>
          <button onClick={() => handleMenuItemDelete(item.id)}>
            Delete Item
          </button>
        </li>
      );
    });
  }

  if (Object.values(modifiers).length) {
    menuModifiers = Object.values(modifiers).map(modifier => {
      return (
        <li className='menu-item' key={modifier.id}>
          <p>Item: {modifier.name}</p>
          <p>Price: ${Number.parseFloat(modifier.price) / 100}</p>
          <button onClick={() => handleModifierDelete(modifier.id)}>
            Delete Modifier
          </button>
        </li>
      );
    });
  }

  if (user) {
    return (
      <div>
        <h1>Hello, {user.first_name}!</h1>
        <button onClick={() => dispatch(logout())}>Logout</button>
        <Link to='/menu/new'>Add a New Menu Item</Link>
        <Link to='/menu/mods/new'>Add a New Modifier</Link>
        <div className='menu-body'>
          <section className='menu-section'>
            <h2>My Menu</h2>
            <ul>{menuItems}</ul>
          </section>
          <section className='menu-section'>
            <h2>My Modifiers</h2>
            <ul>{menuModifiers}</ul>
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
