import { useState } from "react";
import { StyledApp } from "components/app/styled-app";
import Header from "components/header/header";
import SearchTitle from "components/search-title/search-title";
import MoviesGrid from "components/movies-grid/movies-grid";
import Modal from "components/modal/modal";

const App = () => {
  const searchTitle = "Most Recent Movies";
  const [modalContent, setModalContent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const showMovieModal = (content) => {
    document.body.classList.add("no-scroll");
    setModalContent(content);
    setShowModal(true);
  };

  const toggleModal = () => {
    document.body.classList.remove("no-scroll");
    setShowModal(false);
  };

  const handleSubmit = (e, formValue) => {
    e.preventDefault();
    console.log(26, formValue);
  };

  return (
    <StyledApp>
      <Header handleSubmit={handleSubmit} />
      <main>
        <SearchTitle title={searchTitle} />
        <MoviesGrid showMovieModal={showMovieModal} />
      </main>
      <Modal
        content={modalContent}
        showModal={showModal}
        toggleModal={toggleModal}
      />
    </StyledApp>
  );
};

export default App;
