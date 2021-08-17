import { MenuItem, Select } from "@material-ui/core";
import { Add, House } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useStateValue } from "../config/StateProvider";
import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const logOut = (e) => {
    e.preventDefault();
    if(user) {
      auth.signOut()
    }

  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://www.tenderd.com/assets/logo-light.svg"
          alt="logo"
        />
      </div>

      <div className="header__right">
        <div className="header__rightOptions">
          <Link to="/">
          <House /> <span>Home</span>
          </Link>
        </div>
        <div className="header__rightOptions">
          <Link to="/add-products">
          <Add /> <span>Add Products</span>
          </Link>
        </div>
        <div className="header__rightOptions">
          <Link>
          List Equipment
          </Link>
          </div>
        <div className="header__rightOptions">
          <Link>
          Contact Us
          </Link>
          </div>

        {user ? (
          <div className="header__rightOptionsLogin">
            <h4>{user?.email}</h4>
            <button onClick={logOut}>Logout</button>
          </div>
        ) : (
          <div className="header__rightOptionsLogin">
            <Link to='/login'>
            <h4>Guest</h4>
            <h3>Login</h3>
            </Link>
          </div>
        )}
        {/* {user ? (
          <div className="header__rightOptions"><span>${user?.email}</span> Log Out </div>
        ) : (
          <Link to='/login'>
          <div className="header__rightOptions"> Login </div>
          </Link>
        )} */}

        <div className="header__rightOptions">
          <Link>
          <Select variant="outlined">
            <MenuItem value="abc">EN</MenuItem>
            <MenuItem value="abc">Arabic</MenuItem>
          </Select>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
