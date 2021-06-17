import React from "react";
import {
  StyledModal,
  StyledModalCover,
  StyledModalContent,
  StyledHeader,
  StyledContentContainer,
  StyledPoster,
  StyledContent,
} from "components/modal/styled-modal";
import close from "assets/images/icons/close.svg";

const Modal = (props) => {
  return (
    <StyledModal showModal={props.showModal}>
      <StyledModalCover onClick={props.toggleModal} />
      <StyledModalContent>
        <StyledHeader>
          <p>{props.content.title}</p>
          <button onClick={props.toggleModal}>
            <img src={close} alt="Close modal button" />
          </button>
        </StyledHeader>
        <StyledContentContainer>
          <StyledPoster>
            <img src={props.content.poster} alt={props.content.title} />
          </StyledPoster>
          <StyledContent>
            <p>
              <span>Release date: </span>
              {props.content.date}
            </p>
            <p>{props.content.overview}</p>
            <p>
              <span>{props.content.vote}</span>/10 ({props.content.voteCount}{" "}
              total votes)
            </p>
          </StyledContent>
        </StyledContentContainer>
      </StyledModalContent>
    </StyledModal>
  );
};

export default Modal;
