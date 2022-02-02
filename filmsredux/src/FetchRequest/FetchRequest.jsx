import { addMovies } from "../Redux/Reducer";

export const FetchRequest = (value, type, page) => {
  return (dispatch) => {
    fetch(
      `http://www.omdbapi.com/?apikey=6c457b54&s=${value}&type=${type}&page=${page}`
    )
      .then((response) => response.json())
      .then((json) => dispatch(addMovies(json)));
  };
};
