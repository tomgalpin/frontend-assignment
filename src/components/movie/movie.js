import {
  StyledMovie,
  StyledPoster,
  StyledVote,
  StyledTitle,
} from "components/movie/styled-movie";

const Movie = ({ poster, title, vote, showModal }) => {
  return (
    <StyledMovie onClick={showModal} data-testid="movie">
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
