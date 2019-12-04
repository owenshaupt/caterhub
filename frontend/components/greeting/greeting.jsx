import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/session_actions";

export default function Greeting(props) {
  const user = useSelector(state => state.entities.users[state.session.id]);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  if (user) {
    return (
      <div>
        <h1>Hello, {user.first_name}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Nobody's home...</h3>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
}
