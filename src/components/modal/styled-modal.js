import styled from "styled-components";
import { colors, screenWidths } from "assets/styles/_variables";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-width: 300px;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  display: ${(props) => (props.hasModal ? "flex" : "none")};
`;

const StyledModalCover = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1001;
`;

const StyledModalContent = styled.div`
  width: 80%;
  height: 90%;
  overflow-y: scroll;

  background-color: ${colors.white};
  padding: 20px 27px 28px 27px;
  z-index: 1002;

  @media screen and (min-width: ${screenWidths.tablet}) {
    width: 580px;
    height: auto;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  @media screen and (min-width: ${screenWidths.tablet}) {
    align-items: center;
  }

  p {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: -0.01em;
    color: ${colors.black};
    margin-top: 30px;

    @media screen and (min-width: ${screenWidths.tablet}) {
      margin-top: 0;
    }
  }

  button {
    cursor: pointer;
    width: 25px;
    height: 25px;
    background-color: ${colors.white};
    border: 1px solid ${colors["gray-3"]};
    padding: 0;
    margin: 0;

    @media screen and (min-width: ${screenWidths.tablet}) {
    }
  }
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${screenWidths.tablet}) {
    flex-direction: row;
  }
`;

const StyledPoster = styled.div`
  margin-right: 0;
  margin-bottom: 22px;
  display: flex;
  justify-content: center;

  img {
    width: 266px;
  }

  @media screen and (min-width: ${screenWidths.tablet}) {
    margin-right: 22px;
    margin-bottom: 0;
    display: block;
  }
`;

const StyledContent = styled.div`
  span {
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.01em;

    &:first-child {
      line-height: 24px;
    }

    &:first-child,
    &:nth-child(2) {
      margin-bottom: 16px;
    }
  }
`;

export {
  StyledModal,
  StyledModalCover,
  StyledModalContent,
  StyledHeader,
  StyledContentContainer,
  StyledPoster,
  StyledContent,
};
