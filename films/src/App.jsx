import React from "react";
import { MainComp } from "./Components/MainComp";
import { Routes, Route } from "react-router-dom";
import { DetailsOfFilm } from "./Components/DetailsOfMovie";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainComp />}></Route>
        <Route path="/details/:id" element={<DetailsOfFilm />}></Route>
      </Routes>
    </div>
  );
};
