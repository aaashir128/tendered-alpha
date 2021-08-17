import React, { useEffect, useState } from "react";
import db from "../config/firebase";
import "./Product.css";
import Products from "./Products";

function Product() {
  const [machine, setMachine] = useState([]);

  useEffect(() => {
    db.collection("machines").onSnapshot((snapshot) =>
      setMachine(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, [machine]);

  return (
    <div className="grid-container">
      {machine.map((v, id) => (
        <Products
          image={v.data.image}
          name={v.data.name}
          type={v.data.type}
          capacity={v.data.capacity}
          unit={v.data.unit}
          details={v.data.details}
        />
      ))}
    </div>
  );
}

export default Product;
