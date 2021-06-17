import { useEffect, useState } from "react";
import axios from "axios";
import { StyledMoviesGrid } from "components/movies-grid/styled-movies-grid";
import EmptyMovieFallback from "assets/images/empty-poster-fallback.svg";
import useInfiniteScroll from "hooks/useInfiniteScroll";

import Movie from "components/movie/movie";

const MoviesGrid = (props) => {
  const env = process.env;
  const apiKey = env.REACT_APP_MOVIE_DB_API_KEY;
  const baseUrl = env.REACT_APP_API_DOMAIN;
  const imgUrl = env.REACT_APP_API_BASE_IMAGE_URL;

  const [movies, setMovies] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  // const [isFetching, setIsFetching] = useInfiniteScroll(getMoreMovies);

  // const [hasMore, setHasMore] = useState(false);
  // console.log(movies);
  const mostRecent = `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=${currPage}`;

  // const showMovieModal = (content) => {
  //   console.log(content);
  // };

  useEffect(() => {
    axios.get(mostRecent).then((response) => {
      // const nextPage = response.data.page + 1;
      // console.log("page: ", response.data.page);
      // console.log("total pages: ", response.data.total_pages);
      // console.log("total results: ", response.data.total_results);
      setMovies(response.data.results);
      setCurrPage(response.data.page + 1);
      setTotalPages(response.data.total_pages);
    });
  }, []);

  function getMoreMovies() {
    if (currPage !== totalPages) {
      setTimeout(() => {
        axios
          .get(mostRecent)
          .then((response) => {
            const nextPage = response.data.page + 1;
            setMovies((prev) => [...prev, ...response.data.results]);
            setCurrPage(nextPage);
          })
          .then(setIsFetching(false));
        console.log("get more movies");
      }, 2000);
    } else {
      console.log("no more movies");
    }
  }

  const renderMovies = (movies) => {
    return movies.map((item, index) => {
      const modalContent = {
        id: item.id,
        title: item.title,
        date: item.release_date,
        vote: item.vote_average,
        voteCount: item.vote_count,
        overview: item.overview,
        poster: item.poster_path
          ? `${imgUrl}${item.poster_path}`
          : EmptyMovieFallback,
      };

      return (
        <Movie
          key={modalContent.id}
          poster={modalContent.poster}
          title={modalContent.title}
          vote={modalContent.vote}
          showMovieModal={() => props.showMovieModal(modalContent)}
        />
      );
    });
  };

  return (
    <StyledMoviesGrid>
      {renderMovies(movies)}
      <div>{isFetching && "Fetching more list items..."}</div>
    </StyledMoviesGrid>
  );
};

export default MoviesGrid;
