import AppStyle from "./App.module.scss";
import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import "../../global/reset.scss";
import Footer from "../Footer/Footer";
import MessagesPage from "../MessagesPage/MessagesPage";
import {BrowserRouter, Route} from "react-router-dom";
import PhotoPage from "../PhotoPage/PhotoPage";

function App(props) {

    return (
        <BrowserRouter>
            <div className={AppStyle.App}>
                <Header/>
                <Navbar/>
                <div className={AppStyle.main_wrapper}>

                    <Route path={'/Profile'} render={() => <Profile postData={props.state.postData}/> }/>
                    <Route path='/MessagesPage' render={() => <MessagesPage dialogsData={props.state.dialogsData}/> }/>
                    <Route path='/PhotoPage' render={() => <PhotoPage imgData={props.state.imgData}/> }/>
                </div>

                <Footer/>

            </div>
        </BrowserRouter>
    );
}

export default App;
