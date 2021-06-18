import { cleanup, render, screen } from "@testing-library/react";
import SearchTitle from "./search-title";

describe("<SearchTitle />", () => {
  let searchTitle;

  const defaultProps = {
    title: "Mock Title",
  };

  beforeEach(() => {
    render(<SearchTitle {...defaultProps} />);
    searchTitle = screen.getByTestId("search-title");
  });

  afterEach(cleanup);

  it("Renders <SearchTitle /> component correctly", () => {
    expect(searchTitle).toBeInTheDocument();
    expect(searchTitle).toHaveTextContent("Mock Title");
  });
});
