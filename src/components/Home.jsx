import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./Header";
import "./Home.css";

function Home() {
  const history = useHistory();

  const getQuote = () => {
    history.push("/get-quote");
  };
  return (
    <div className="home">
      <Header />
      <div className="home__container">
        <h2 className="home__heading">
          Search for the equipment you want to rent and book it in a few clicks
        </h2>
        <div className="home__containerBox">
          <div className="topBox">
            <ShoppingCart /> <span>Rent Equipment</span>
          </div>
          <div className="searchBox">
            <form>
              <input
                className="searchBoxInput"
                placeholder="Search for Machines, brand, model..."
              />

              <button className="searchBoxButton" type="submit" onClick={getQuote}>
                Search Prices
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
