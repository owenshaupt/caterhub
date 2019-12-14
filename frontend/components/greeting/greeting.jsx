import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchMenuItems, clearMenuItems } from "../../actions/menu_item_actions";
import { fetchModifiers, clearModifiers } from "../../actions/modifier_actions";

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

  if (items.length) {
    menuItems = items.map(item => {
      return (
        <li className='menu-item' key={item.id}>
          <p>Item: {item.name}</p>
          <p>Price: ${item.price}</p>
          <p>Required Notice: {item.required_notice}</p>
        </li>
      );
    });
  }

  if (modifiers.length) {
    menuModifiers = modifiers.map(modifier => {
      return (
        <li className='menu-item' key={modifier.id}>
          <p>Item: {modifier.name}</p>
          <p>Price: ${modifier.price}</p>
          <p>Item IDs: {modifier.item_ids}</p>
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
        <h2>My Menu</h2>
        <ul>{menuItems}</ul>
        <h2>My Modifiers</h2>
        <ul>{menuModifiers}</ul>
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
