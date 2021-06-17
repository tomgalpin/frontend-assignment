import styled from "styled-components";
import { colors, screenWidths } from "assets/styles/_variables";

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // justify-content: center;
  // align-items: center;
  z-index: 1000;
  display: ${(props) => (props.showModal ? "block" : "none")};
`;

const StyledModalCover = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
`;

const StyledModalContent = styled.div`
  position: absolute;
  top: 20px;
  left: 6%;
  width: 80%;
  height: auto;

  background-color: ${colors.white};
  padding: 20px 27px 28px 27px;
  z-index: 1002;

  @media screen and (min-width: ${screenWidths.tablet}) {
    top: 15vh;
    width: 580px;
    left: 50%;
    margin-left: -290px;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  p {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: -0.01em;
    color: ${colors.black};
  }

  button {
    cursor: pointer;
    width: 25px;
    height: 25px;
    background-color: ${colors.white};
    border: 1px solid ${colors["gray-3"]};
    padding: 0;
    margin: 0;
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
