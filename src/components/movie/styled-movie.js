import styled from "styled-components";
import { colors } from "assets/styles/_variables";

const StyledMovie = styled.div`
  position: relative;
  background: ${colors.white};
  border: 1px solid ${colors.navy};
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`;

const StyledPoster = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

const StyledVote = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${colors.white};
  border: 1px solid ${colors.black};

  span {
    font-weight: 600;
    font-size: 12px;
    color: ${colors.black};
    letter-spacing: -0.01em;
  }
`;

const StyledTitle = styled.div`
  background-color: ${colors.white};
  text-align: center;
  padding: 10px 0 15px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  p {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.01em;
    color: ${colors.black};
    width: 80%;
    margin: 0 auto;
  }
`;

export { StyledMovie, StyledPoster, StyledVote, StyledTitle };
