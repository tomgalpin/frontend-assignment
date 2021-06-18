import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { StyledMoviesGrid } from "components/movies-grid/styled-movies-grid";
import EmptyMovieFallback from "assets/images/empty-poster-fallback.svg";
import Movie from "components/movie/movie";

const MoviesGrid = (props) => {
  const imgUrl = process.env.REACT_APP_API_BASE_IMAGE_URL;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const observer = useRef(null);

  useEffect(() => {
    if (props.initNewSearch) setHasMore(true);

    getMovies(currPage, props.initNewSearch);
    setCurrPage((prev) => prev + 1);
  }, [props.getUrl]);

  const observerRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (currPage < totalPages) {
            getMovies(currPage, false);
            setHasMore(true);
            setCurrPage((prev) => prev + 1);
          } else {
            setHasMore(false);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const getMovies = async (page, initNewSearch) => {
    const pageNum = initNewSearch ? 1 : page;
    const url = `${props.getUrl}${pageNum}`;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await axios.get(url).then((response) => {
      const moviesList = initNewSearch
        ? response.data.results
        : [...movies, ...response.data.results];

      setMovies(moviesList);
      setTotalPages(response.data.total_pages);
      setIsLoading(false);
    });
  };

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
          key={index}
          poster={modalContent.poster}
          title={modalContent.title}
          vote={modalContent.vote}
          showModal={() => props.showModal(modalContent)}
        />
      );
    });
  };

  return (
    <StyledMoviesGrid data-testid="movies-grid">
      {renderMovies(movies)}
      <div>{isLoading && "Loading Movies......"}</div>
      <div ref={observerRef} />
    </StyledMoviesGrid>
  );
};

export default MoviesGrid;
