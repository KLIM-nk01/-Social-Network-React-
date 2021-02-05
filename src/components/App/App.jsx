import AppStyle from "./App.module.scss";
import React, { components } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import "../../global/reset.scss";
import Footer from "../Footer/Footer";
import MessagesPage from "../MessagesPage/MessagesPage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={AppStyle.App}>
        <Header />
        <Navbar />
        <div className={AppStyle.main_wrapper}>
          <Route path='/Profile' component={Profile} />
          <Route path='/MessagesPage' component={MessagesPage} />

        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
