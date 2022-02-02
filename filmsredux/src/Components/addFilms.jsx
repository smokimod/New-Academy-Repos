import { useSelector, useDispatch } from "react-redux";
import "./css/moviesStyles.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FetchRequest } from "../FetchRequest/FetchRequest";
import { Link as NavLink, useLocation } from "react-router-dom";
import { PaginationItem } from "@mui/material";

export const AddFilms = () => {
  const location = useLocation();
  console.log(location.search);
  const dispatch = useDispatch();
  const [pageQty, setPageQty] = useState(0);
  const [page, setPage] = useState(
    parseInt(location.search?.split("=")[1] || 1)
  );
  const array = useSelector((state) => state.search.arr);
  const res = useSelector((state) => state.search.page);
  const value = useSelector((state) => state.paginator.val);
  const type = useSelector((state) => state.paginator.type);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setPageQty(Math.ceil(res / 10));
  }, [res, dispatch]);

  const handeChange = (_, page) => {
    setPage(page);
    dispatch(FetchRequest(value, type, page));
  };

  return (
    <div className="container">
      <div className="films">
        {array &&
          array.map((item, index) => (
            <div className="divMovie" key={index}>
              <div className="image_Red">
                <img src={item.Poster} alt="movie" style={{ height: 200 }} />
              </div>
              <div className="films_info">
                <div>{item.Title}</div>
                <div>{item.Type}</div>
                <div>{item.Year}</div>
                <Link to={`/details/${item.imdbID}`}>
                  <button id={item.imdbID} className="details">
                    Details
                  </button>
                </Link>
                <button>Favorite</button>
              </div>
            </div>
          ))}
      </div>
      <div className="buttoms"></div>
      <Stack spacing={2}>
        {!!pageQty && (
          <Pagination
            count={pageQty}
            color="primary"
            page={page}
            onChange={handeChange}
            renderItem={(item) => (
              <PaginationItem
                component={NavLink}
                to={`/page/${item.page}`}
                {...item}
              />
            )}
          />
        )}
      </Stack>
    </div>
  );
};
