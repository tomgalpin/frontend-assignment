import styled from "styled-components";
import { colors } from "assets/styles/_variables";

const StyledSearchTitle = styled.h3`
  font-style: normal;
  color: ${colors.black};
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.01em;
  margin-bottom: 23px;
`;

const SearchTitle = ({ title }) => {
  return <StyledSearchTitle>{title}</StyledSearchTitle>;
};

export default SearchTitle;
