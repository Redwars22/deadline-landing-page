import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./AndrewKit/menu/menu.component";
import Picture from "./AndrewKit/picture/picture.component";
import Typography from "./AndrewKit/typography/typography.component";
import Icon from "./AndrewKit/icon/icon.component";
import Testimonials from "./layout/Testimonials";
import Header from "./layout/Header";
import Features from "./layout/Features";
import Action from "./layout/Action";
import FloatingButton from "./AndrewKit/button/floating.component";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <FloatingButton
        backgroundColor={"black"}
        iconColor={"white"}
        type={"square"}
        position={"left"}
        icon={"github"}
        fontSize={"45px"}
        action={()=> window.open("https://github.com/Redwars22/deadline")}
      />
      <Header />
      <Features />
      <Testimonials />
      <Action />
      <Footer/>
    </div>
  );
}

export default App;
