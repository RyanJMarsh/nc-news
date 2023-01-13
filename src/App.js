import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header.jsx";
import ArticleDisplay from "./Components/ArticleDisplay.jsx";
import LargeArticleDisplay from "./Components/LargeArticleDisplay.jsx";
import TopicArticleDisplay from "./Components/TopicArticleDisplay";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<ArticleDisplay />}></Route>
        <Route path="/articles/:article_id" element={<LargeArticleDisplay />}></Route>
        <Route path="/topics/:slug" element={<TopicArticleDisplay />}></Route>
      </Routes>
    </div>
  );
}

export default App;
