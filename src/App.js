import "./App.css";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-full ">
        <Header />
        <Main className="flex-grow" />
        <Footer />
      </div>
    </>
  );
};

export default App;
