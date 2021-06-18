import { useState } from "react";
import { StyledApp } from "components/app/styled-app";
import Header from "components/header/header";
import SearchTitle from "components/search-title/search-title";
import MoviesGrid from "components/movies-grid/movies-grid";
import Modal from "components/modal/modal";

const App = () => {
  const env = process.env;
  const apiKey = env.REACT_APP_MOVIE_DB_API_KEY;
  const baseUrl = env.REACT_APP_API_DOMAIN;
  const urlSuffix = `?api_key=${apiKey}&language=en-US&page=`;
  const mostRecent = `${baseUrl}/movie/now_playing${urlSuffix}&page=`;

  const [searchParams, setSearchParams] = useState("");
  const [initNewSearch, setInitNewSearch] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [hasModal, setHasModal] = useState(false);
  const [getUrl, setGetUrl] = useState(mostRecent);

  let isValidSearchParam = searchParams.length > 0;
  const searchTitle = isValidSearchParam
    ? `Search:  ${searchParams}`
    : "Most Recent Movies";

  const showModal = (content) => {
    document.body.classList.add("no-scroll");
    setModalContent(content);
    setHasModal(true);
  };

  const hideModal = () => {
    document.body.classList.remove("no-scroll");
    setHasModal(false);
  };

  const handleSubmit = (e, formValue) => {
    const trimmed = formValue.trim();

    e.preventDefault();
    setInitNewSearch(true);

    if (trimmed.length > 0) {
      const uriEncoded = encodeURIComponent(trimmed);
      const searchUrl = `${baseUrl}/search/multi${urlSuffix}&query=${uriEncoded}&page=`;

      setSearchParams(trimmed);
      setGetUrl(searchUrl);
    } else {
      setSearchParams("");
      setGetUrl(mostRecent);
    }
  };

  return (
    <StyledApp data-testid="app">
      <Header handleSubmit={handleSubmit} />
      <main>
        <SearchTitle title={searchTitle} />
        <MoviesGrid
          showModal={showModal}
          getUrl={getUrl}
          initNewSearch={initNewSearch}
        />
      </main>
      <Modal content={modalContent} hasModal={hasModal} hideModal={hideModal} />
    </StyledApp>
  );
};

export default App;
