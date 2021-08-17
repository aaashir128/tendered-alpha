import "./App.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Machinery from "./pages/Machinery";
import Login from "./pages/Login";
import { auth } from "./config/firebase";
import { useStateValue } from "./config/StateProvider";
import { useEffect } from "react";
import AddProducts from "./pages/AddProducts";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("This is Auth User >>>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <Header /> */}

        <Switch>
          <Route path="/add-products">
            <AddProducts />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/get-quote">
            <Machinery />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
