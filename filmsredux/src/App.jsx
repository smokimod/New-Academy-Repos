import React from "react";
import { MainBlock } from "./Components/MainBlock";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { DetailsOfFilm } from "./Components/DetailsOfMovie";
import { AddFilms } from "./Components/addFilms";

export const App = () => {
  return (
    <div className="main_block">
     
        <Routes>
          <Route path="/" element={<MainBlock />}></Route>
          <Route path="/page/:id"  element={ <AddFilms />}></Route>
          <Route path="details/:id" element={<DetailsOfFilm />}></Route>
        </Routes>
     
        {/* <AddFilms /> */}
    </div>
  );
};
