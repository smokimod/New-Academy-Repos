import { Link } from "react-router-dom";
export const AddMovies = (props) => {
  const style = {
    img: {
      height: 200,
    },
  };
  return (
    <>
      {props.movies &&
        props.movies.map((item, index) => (
          <div className="divMovie" key={index}>
            <div className="image_Red">
              <img src={item.Poster} alt="movie" style={style.img} />
            </div>
            <div className="films_info">
              <div>{item.Title}</div>
              <div>{item.Type}</div>
              <div>{item.Year}</div>
              <Link to={`/details/${item.imdbID}`}>
                <button className="details" id={item.imdbID}>
                  Details
                </button>
              </Link>
              <button onClick={() => props.addFavoriteMovie(item)}>
                Favorite
              </button>
            </div>
          </div>
        ))}
    </>
  );
};
