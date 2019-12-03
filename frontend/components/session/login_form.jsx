import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useLoginForm from "./session_hooks/custom_hooks";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";

export default function LoginForm(props) {
  const { inputs, handleInputChange, handleSubmit } = useLoginForm();
  const session = useSelector(state => state.session.id);
  const dispatch = useDispatch();

  const handleLogout = e => {
    console.log("hitting handleLogout");
    e.preventDefault();
    dispatch({ type: LOGOUT_CURRENT_USER });
  };

  return (
    <div>
      <h2>{session}</h2>
      {/* <form onClick={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input
            type='email'
            name='email'
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password1'
            onChange={handleInputChange}
            value={inputs.password1}
          />
        </div>
        <button type='submit'>Login</button>
      </form> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
