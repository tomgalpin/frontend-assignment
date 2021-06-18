import { cleanup, render, screen } from "@testing-library/react";
import Header from "./header";

describe("<Header />", () => {
  let header;

  const defaultProps = {
    handleSubmit: () => testFunction(),
  };

  const testFunction = () => {
    console.log("test function");
  };

  beforeEach(() => {
    render(<Header {...defaultProps} />);
    header = screen.getByTestId("header");
  });

  afterEach(cleanup);

  it("Renders <Header /> component correctly", () => {
    const link = header.querySelector("a");
    const img = link.querySelector("img");
    const searchBar = screen.getByTestId("search-bar");

    expect(header).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
  });
});
