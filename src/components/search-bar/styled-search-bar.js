import styled from "styled-components";
import { colors } from "assets/styles/_variables";

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors["gray-2"]};
  padding: 5px 10px;
  border-radius: 2px;
  background-color: ${colors.white};

  img {
    height: 16px;
    width: 16px;
  }

  input {
    height: 16px;
    margin: 0 0 0 8px;
    padding: 5px 10px 5px 0;
    border: none;
  }
`;

export { StyledSearchBar };
