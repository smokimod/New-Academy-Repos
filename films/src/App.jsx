import React from "react";
import { MainComp } from "./Components/MainComp";
import { Routes, Route } from "react-router-dom";
import { DetailsOfFilm } from "./Components/DetailsOfMovie";
import { Favorities } from "./Components/Navbar/Favorities";
import { Watched } from "./Components/Navbar/Watched";
import { Navigation } from "./Components/Navbar/Navigation";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<MainComp />}></Route>
          <Route path="details/:id" element={<DetailsOfFilm />}></Route>
          <Route path="Favorites" element={<Favorities />}></Route>
          <Route path="Watched" element={<Watched />}></Route>
          <Route path="Main_page" element={<MainComp />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
