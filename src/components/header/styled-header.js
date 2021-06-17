import styled from "styled-components";
import { colors } from "assets/styles/_variables";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors["gray-2"]};
  margin-bottom: 37px;
`;

export { StyledHeader };
