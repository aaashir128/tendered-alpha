import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import db, { storage } from "../config/firebase";
import "./AddProducts.css";

function AddProducts() {
  const [type, setType] = useState(null);
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [unit, setUnit] = useState(null);
  const [progress, setProgress] = useState(0);

  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const postData = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.random(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL() 
          .then((url) => {
            db.collection("machines").add({
              type: type,
              name: name,
              capacity: capacity,
              details: details,
              unit: unit,
              image: url,
            });
            setName("");
            setCapacity(0);
            setDetails("");
            setUnit(null);
            setImage(null);
            setType(null);
          });

        alert("your ad has been posted successfully");
        history.push('/get-quote')
      }
    );
  };
  return (
    <div className="addProducts">
      <Header />

      <div className="addProducts__container">
        <h1>Add Your Equipment / Machine</h1>
        <div className="container">
          <form>
            <div className="container__input">
              <h3>Type of Machine</h3>
              <div className="inputRadio">
                <form value={type} onChange={(e) => setType(e.target.value)}>
                  <input type="radio" value="Excavtors" name="machine" />{" "}
                  Excavtors
                  <input type="radio" value="Skid Steer" name="machine" /> Skid
                  Steer
                  <input type="radio" value="Bulldozerd" name="machine" />{" "}
                  Bulldozerd
                  <input type="radio" value="Shovel" name="machine" /> Shovel
                  <input type="radio" value="Trucks" name="machine" /> Trucks
                  <input
                    type="radio"
                    value="Motor Grader"
                    name="machine"
                  />{" "}
                  Motor Grader
                  <input type="radio" value="Backhoes" name="machine" />{" "}
                  Backhoes
                  <input
                    type="radio"
                    value="Mobile Crane"
                    name="machine"
                  />{" "}
                  Mobile Crane
                </form>
              </div>
            </div>

            <div className="container__input">
              <h3>Name of Machine</h3>
              <input
                className="inputField"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="container__input">
              <h3>Capacity of Machine</h3>
              <input
                className="inputFieldCapacity"
                value={capacity}
                type="number"
                onChange={(e) => setCapacity(e.target.value)}
              />
              <div className="inputRadio">
                <form value={unit} onChange={(e) => setUnit(e.target.value)}>
                  <input type="radio" value="Kg" name="machine" /> Kg
                  <input type="radio" value="Ton" name="machine" /> Ton
                  <input
                    type="radio"
                    value="Cubic Meters"
                    name="machine"
                  />{" "}
                  Cubic Meters
                  <input type="radio" value="Meters" name="machine" /> Meters
                </form>
              </div>
            </div>

            <div className="container__input">
              <h3>Details About Machine</h3>
              <textarea
                className="inputFieldDetails"
                value={details}
                type="text"
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <div className="container__input">
              <h3>Upload Pictures</h3>
              <input type="file" onChange={handleChange} />
              <progress value="progress" max="100" />
            </div>

            <button
              className="containerButton"
              type="submit"
              onClick={postData}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
