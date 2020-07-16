import React from "react";
import "./App.css"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from './pages/SingleRoom'
import Error from "./pages/Error"
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">

          <Navbar />
          <Switch>




            <Route exact path="/" component={Home} />
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/rooms/:beachside" component={SingleRoom} />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;