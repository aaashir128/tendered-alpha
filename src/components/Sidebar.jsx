import {
  Assignment,
  ChevronLeft,
  Explore,
  Person,
  ShoppingCart,
  Sms,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useStateValue } from "../config/StateProvider";
import "./Sidebar.css";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  const signOut = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerLogo">
          <Link to='/'>
          <img
            className="headerLogo"
            src="https://tenderd-ui.storage.googleapis.com/assets/logo-light.svg"
            alt=""
            />
            </Link>
        </div>
        {!user ? (
          <div className="sidebar__headerAccount">
            <p>Unverified Account</p>
          </div>
        ) : (
          <div className="sidebar__headerAccountActive">
            <p>Verified Account</p>
          </div>
        )}
      </div>

      <div className="sidebar__options">
        <div className="sidebar__option">
          <ShoppingCart /> <span>Marketplace</span>
        </div>
        <div className="sidebar__option">
          <Explore /> <span>Track Projects</span>
        </div>
        <div className="sidebar__option">
          <Assignment /> <span>Get Quote</span>
        </div>
      </div>

      <div className="sidebar__blank"></div>

      <div className="sidebar__user">
        <div className="siderbar__login">
          <Person />
          {!user ? (
            <Link to='/login'>
            <div className='sidebar__loginButtons'>
              <h4>Login</h4> | <h4>Signup</h4>
            </div>
            </Link>
          ) : (
            <div className='sidebar__loginButtons'>
              <h4>{user?.email}</h4> | <h4 onClick={signOut}>SignOut</h4>
            </div>
          )}
        </div>

        <div className="sidebar__support">
          <Sms />
          <h4>Chat Support</h4>
        </div>
      </div>

      <div className="siderbar__backword">
        <ChevronLeft />
      </div>
    </div>
  );
}

export default Sidebar;
