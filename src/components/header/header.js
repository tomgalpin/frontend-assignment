import SearchBar from "components/search-bar/search-bar";
import logo from "assets/images/logo.svg";
import { StyledHeader } from "components/header/styled-header";

const Header = (props) => {
  return (
    <StyledHeader>
      <a href="https://www.timescale.com/" target="_blank" rel="noreferrer">
        <img src={logo} alt="Timescale" />
      </a>
      <SearchBar handleSubmit={props.handleSubmit} />
    </StyledHeader>
  );
};

export default Header;
