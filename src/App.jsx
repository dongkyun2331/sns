import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}
