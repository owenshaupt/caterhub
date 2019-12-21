import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/session_actions";
import {
  fetchMenuItems,
  deleteMenuItem,
  clearMenuItems
} from "../../actions/menu_item_actions";
import { fetchModifiers, clearModifiers } from "../../actions/modifier_actions";
import HomeTab from "./home/home_tab";
import MenuPane from "./panes/menu_pane";

export default function PartnerHome(props) {
  const user = useSelector(state => state.entities.users[state.session.id]);

  return (
    <>
      <div className='partner-home-grid'>
        <div className='practice-header'>
          <h1>welcome to THE home page, {user.first_name}</h1>
        </div>
        <div className='practice-sidebar'>
          <HomeTab id='Orders' active={false} />
          <HomeTab id='Menu' active={true} />
          <HomeTab id='Schedule' active={false} />
        </div>
        <div className='practice-body'>
          <MenuPane />
        </div>
      </div>
    </>
  );
}
