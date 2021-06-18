import { cleanup, render, screen } from "@testing-library/react";
import Modal from "./modal";

describe("<Modal />", () => {
  const defaultProps = {
    hasModal: true,
    hideModal: jest.fn(),
    content: {
      title: "Mock Title",
      poster: "https://image.tmdb.org/t/p/w300/rTh4K5uw9HypmpGslcKd4QfHl93.jpg",
      date: "2021-05-26",
      overview: "Mock Overview...",
      vote: "8.3",
      voteCount: 12,
    },
  };

  afterEach(cleanup);

  it("Renders <Modal /> component correctly", () => {
    render(<Modal {...defaultProps} />);
    const visibleModal = screen.getByTestId("modal");

    expect(visibleModal).toBeInTheDocument();
    expect(visibleModal).toHaveStyle("display: flex");
  });

  it("Does not show the <Modal /> when hasModal is false", () => {
    const hiddenModalProps = {
      ...defaultProps,
      hasModal: false,
    };

    render(<Modal {...hiddenModalProps} />);
    const hiddenModal = screen.getByTestId("modal");

    expect(hiddenModal).toHaveStyle("display: none");
  });
});
