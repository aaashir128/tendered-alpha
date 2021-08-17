import { Button } from "@material-ui/core";
import { ZoomInOutlined } from "@material-ui/icons";
import React from "react";
import Product from "../components/Product";
import Products from "../components/Products";
import "./Qoute.css";

function Quote() {
  return (
    <div className="quote">
      <div className="quote__header">
        <div className="quote__headrLeft">
          <h3>Get Quote</h3>
        </div>
        <div className="qoute__headerRight">
          <Button>Search</Button>
          <Button>Orders</Button>
        </div>
      </div>

      <div className="quote__search">
        <h3>Search for your machine requirements</h3>
        <div className="searchBar">
          <input place="Heavy" />
          <ZoomInOutlined />
        </div>
      </div>


          <h3 className="title my-8">Popular Machines</h3>
          <Product />
    </div>
  );
}

export default Quote;
