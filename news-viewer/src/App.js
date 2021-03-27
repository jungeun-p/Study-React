import "./App.css";
import React, { useState, useCallback } from "react";
import NewsList from "./Components/NewsList";
import Categories from "./Components/Categories";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
