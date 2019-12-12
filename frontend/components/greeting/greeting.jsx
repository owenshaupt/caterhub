import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../actions/menu_item_actions";
import { logout } from "../../actions/session_actions";

export default function Greeting(props) {
  const user = useSelector(state => state.entities.users[state.session.id]);
  const items = useSelector(state => state.entities.menuItems);
  const dispatch = useDispatch();

  let menuItems;

  useEffect(() => {
    dispatch(fetchItems());
    // return () => {
    //   cleanup;
    // };
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

  if (user) {
    return (
      <div>
        <h1>Hello, {user.first_name}!</h1>
        <button onClick={() => dispatch(logout())}>Logout</button>
        <Link to='/menu/new'>Add a New Menu Item</Link>
        <h2>My Menu</h2>
        <ul>{menuItems}</ul>
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
