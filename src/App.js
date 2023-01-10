import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header.jsx";
import ArticleDisplay from "./Components/ArticleDisplay.jsx";
import { useState } from "react";
import { Routes } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <Header />

      <ArticleDisplay />
    </div>
  );
}

export default App;
