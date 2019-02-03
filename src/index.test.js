import React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import {
  ScrollMarkerContainer,
  ScrollMarkerLink,
  ScrollMarkerSection
} from "./index";

afterEach(cleanup);

describe("ScrollMarkerContainer", () => {
  test("sets active section on page load if hash exists", () => {
    const initialHash = window.location.hash;
    window.location.hash = "#ducks";

    const { getByText } = render(
      <ScrollMarkerContainer>
        <ScrollMarkerLink id="overview">
          {({ isActive, onClick }) => (
            <a
              href="#overview"
              onClick={onClick}
              data-test-is-active={isActive}
            >
              Overview
            </a>
          )}
        </ScrollMarkerLink>
        <ScrollMarkerLink id="ducks">
          {({ isActive, onClick }) => (
            <a href="#ducks" onClick={onClick} data-test-is-active={isActive}>
              Ducks
            </a>
          )}
        </ScrollMarkerLink>
      </ScrollMarkerContainer>
    );

    const firstLink = getByText("Overview");
    const secondLink = getByText("Ducks");

    expect(firstLink.getAttribute("data-test-is-active")).toBe("false");
    expect(secondLink.getAttribute("data-test-is-active")).toBe("true");

    window.location.hash = initialHash;
  });
});

describe("ScrollMarkerLink", () => {
  test("sets active section when clicked", () => {
    const { getByText } = render(
      <ScrollMarkerContainer>
        <ScrollMarkerLink id="overview">
          {({ isActive, onClick }) => (
            <a
              href="#overview"
              onClick={onClick}
              data-testid="click-here"
              data-test-is-active={isActive}
            >
              Overview
            </a>
          )}
        </ScrollMarkerLink>
      </ScrollMarkerContainer>
    );

    const anchor = getByText("Overview");
    expect(anchor.getAttribute("data-test-is-active")).toBe("false");
    fireEvent.click(anchor);
    expect(anchor.getAttribute("data-test-is-active")).toBe("true");
  });
});

describe("ScrollMarkerSection", () => {
  test("passes `id` through to children", () => {
    const { getByTestId } = render(
      <ScrollMarkerContainer>
        <ScrollMarkerSection id="overview">
          {({ id }) => <div data-testid={id}>Overview</div>}
        </ScrollMarkerSection>
      </ScrollMarkerContainer>
    );

    expect(getByTestId("overview")).toBeTruthy();
  });
});
