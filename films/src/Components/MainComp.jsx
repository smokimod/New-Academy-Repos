import "./style.css";
import "./styleOfDetails.css";
import "./moviesStyles.css";
import { useState } from "react";
import { AddMovies } from "./AddMovies";
import { Forma } from "./OtherComponents/Forma";
import { Buttons } from "./OtherComponents/Buttons";

export const MainComp = () => {
  const [value, AddValue] = useState("");
  const [array, setArray] = useState([]);
  const [btn, setBtn] = useState([]);
  const [type, AddType] = useState("");
  const [sort, setSort] = useState("");
  const [favorite, setFavorite] = useState([]);

  const addElement = (e) => {
    AddValue(e.target.value);
  };

  const addType = (e) => {
    AddType(e.target.value);
  };

  const pageTarget = (e) => {
    searchMovies(e.target.textContent);
  };

  const addSort = (e) => {
    setSort(e.target.value);
  };
  const addFavoriteMovie = (movie) => {
    const addFavorite = [...favorite, movie];
    setFavorite(addFavorite);
  };

  const searchMovies = async (page) => {
    try {
      const url = `http://www.omdbapi.com/?apikey=6c457b54&s=${value}&page=${page}&type=${type}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (sort === "Year") {
        setArray(
          responseJson.Search.sort((a, b) => (a.Year > b.Year ? 1 : -1))
        );
      }
      if (sort === "A-Z") {
        setArray(
          responseJson.Search.sort((a, b) => {
            const x = a.Title.toLowerCase();
            const y = b.Title.toLowerCase();
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
          })
        );
      }
      if (sort === "Z-A") {
        setArray(
          responseJson.Search.sort((a, b) => {
            const x = a.Title.toLowerCase();
            const y = b.Title.toLowerCase();
            if (x > y) return -1;
            if (x < y) return 1;
            return 0;
          })
        );
      } else setArray(responseJson.Search);
      const totalPages = Math.ceil(responseJson.totalResults / 10);
      setBtn([...Array(totalPages).keys()]);
    } catch (e) {
      alert("Фильм не найден");
    }
  };
  console.log(favorite);

  return (
    <div className="main_block">
      <Forma
        value={value}
        addElement={addElement}
        searchMovies={searchMovies}
        addType={addType}
        addSort={addSort}
      />
      <div className="container">
        <div className="films">
          <AddMovies movies={array} addFavoriteMovie={addFavoriteMovie} />
        </div>
        <div className="buttoms">
          <Buttons btn={btn} pageTarget={pageTarget} />
        </div>
      </div>
      <div className="info"></div>
    </div>
  );
};
