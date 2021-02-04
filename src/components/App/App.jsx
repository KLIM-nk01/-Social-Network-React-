import AppStyle from "./App.module.scss";
import React, { components } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import "../../global/reset.scss";
import Footer from "../Footer/Footer";
import MessagesPage from "../MessagesPage/MessagesPage";

function App() {
  return (
    <div className={AppStyle.App}>
      <Header />
      <Navbar />
      <div className={AppStyle.main_wrapper}>
        {/* <Profile /> */}
        <MessagesPage />
      </div>

      <Footer />
    </div>
  );
}

export default App;
