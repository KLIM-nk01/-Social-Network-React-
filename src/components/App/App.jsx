import AppStyle from "./App.module.scss";
import React, { components } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import '../../global/reset.scss'

function App() {
  return (
    <div className={AppStyle.App}>
      <Header />
      <div className={AppStyle.body}>
      
        <Navbar />
        <Profile/>
      </div>
    </div>
  );
}

export default App;
