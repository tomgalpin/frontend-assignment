import {
  StyledMovie,
  StyledPoster,
  StyledVote,
  StyledTitle,
} from "components/movie/styled-movie";

const Movie = ({ poster, title, vote, showMovieModal }) => {
  return (
    <StyledMovie onClick={showMovieModal}>
      <StyledPoster>
        <img src={poster} alt={title} />
        <StyledVote>
          <span>{vote}</span>
        </StyledVote>
      </StyledPoster>
      <StyledTitle>
        <p>{title}</p>
      </StyledTitle>
    </StyledMovie>
  );
};

export default Movie;
