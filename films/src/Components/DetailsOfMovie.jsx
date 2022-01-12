import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const DetailsOfFilm = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      const url = `http://www.omdbapi.com/?apikey=6c457b54&i=${id}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setDetails(responseJson);
    }
    fetchData();
  }, [id]);

  return (
    <div className="main_block_for_details">
      <div className="single_details">
        <div className="poster_other_things_block_1">
          <div>
            <img src={details.Poster} alt="movie"></img>
          </div>
        </div>
        <div className="info_other_things_block_2">
          <div className="info_border">
            <div className="block_2_title">
              {details.Title}{" "}
              <span className="rata_of_movie">
                {" "}
                (Metascore): {details.Metascore}
              </span>
            </div>
            <div className="block_2_title">About Movie:</div>
            <div className="other_movie_info">Released: {details.Released}</div>
            <div className="other_movie_info">Country: {details.Country}</div>
            <div className="other_movie_info">Genre: {details.Genre}</div>
            <div className="other_movie_info">Director: {details.Director}</div>
            <div className="other_movie_info">Actors: {details.Actors}</div>
            <div className="other_movie_info">
              BoxOffice: {details.BoxOffice}
            </div>
            <div className="other_movie_info">Plot: {details.Plot}</div>
            <div className="other_movie_info">Rated: {details.Rated}</div>
            <div className="other_movie_info">Runtime: {details.Runtime}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
