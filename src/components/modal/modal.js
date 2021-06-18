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
import moment from "moment";

const Modal = (props) => {
  const readableDate = (date) => {
    const formattedDate = moment(date).format("MMMM DD, YYYY");

    return formattedDate;
  };

  return (
    <StyledModal hasModal={props.hasModal} data-testid="modal">
      <StyledModalCover onClick={props.hideModal} />
      <StyledModalContent>
        <StyledHeader>
          <p>{props.content.title}</p>
          <button onClick={props.hideModal}>
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
              {readableDate(props.content.date)}
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
