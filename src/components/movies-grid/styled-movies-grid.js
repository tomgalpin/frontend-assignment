import styled from "styled-components";
import { screenWidths } from "assets/styles/_variables";

const StyledMoviesGrid = styled.section`
  display: grid;
  grid-gap: 26px;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${screenWidths.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${screenWidths.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  } ;
`;

export { StyledMoviesGrid };
