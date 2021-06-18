import { cleanup, render, screen } from "@testing-library/react";
import SearchBar from "./search-bar";

describe("<SearchBar />", () => {
  let searchBar;

  const defaultProps = {
    handleSubmit: () => jest.fn(),
  };

  beforeEach(() => {
    render(<SearchBar {...defaultProps} />);
    searchBar = screen.getByTestId("search-bar");
  });

  afterEach(cleanup);

  it("Renders <SearchBar /> component correctly", () => {
    const form = searchBar.querySelector("form");
    const input = searchBar.querySelector("input");

    expect(searchBar).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
