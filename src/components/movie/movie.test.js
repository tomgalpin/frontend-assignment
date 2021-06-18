import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Movie from "./movie";

describe("<Movie />", () => {
  let movie;

  const defaultProps = {
    poster: "https://image.tmdb.org/t/p/w300/rTh4K5uw9HypmpGslcKd4QfHl93.jpg",
    title: "Mock Title",
    vote: "8.0",
    showModal: jest.fn(),
  };

  beforeEach(() => {
    render(<Movie {...defaultProps} />);
    movie = screen.getByTestId("movie");
  });

  afterEach(cleanup);

  it("Renders <Movie /> component correctly", () => {
    expect(movie).toBeInTheDocument();
  });

  it("Calls showModal onClick", () => {
    fireEvent.click(movie);
    expect(defaultProps.showModal).toHaveBeenCalled();
  });
});
