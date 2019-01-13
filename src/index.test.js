import React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import {
  ScrollMarkerContainer,
  ScrollMarkerLink,
  ScrollMarkerSection
} from "./index";

afterEach(cleanup);

describe("ScrollMarkerLink", () => {
  test("turns `id` into an `href`", () => {
    const id = "overview";

    const { getByText } = render(
      <ScrollMarkerContainer>
        <ScrollMarkerLink id={id}>
          {({ href, onClick }) => (
            <a href={href} onClick={onClick}>
              Overview
            </a>
          )}
        </ScrollMarkerLink>
      </ScrollMarkerContainer>
    );

    const anchor = getByText("Overview");
    expect(anchor.getAttribute("href")).toBe(`#${id}`);
  });

  test("sets active section when clicked", () => {
    const { getByText } = render(
      <ScrollMarkerContainer>
        <ScrollMarkerLink id="overview">
          {({ isActive, href, onClick }) => (
            <a
              href={href}
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
  test("renders a `div` by default", () => {
    const { getByText } = render(
      <ScrollMarkerContainer>
        <ScrollMarkerSection id="goose">Overview</ScrollMarkerSection>
      </ScrollMarkerContainer>
    );
    expect(getByText("Overview").tagName).toBe("DIV");
  });

  test("can be customized to render a `div`", () => {
    const { getByText } = render(
      <ScrollMarkerContainer>
        <ScrollMarkerSection is="marquee" id="goose">
          Overview
        </ScrollMarkerSection>
      </ScrollMarkerContainer>
    );

    expect(getByText("Overview").tagName).toBe("MARQUEE");
  });

  test("spreads arbitrary props on root element", () => {
    const { getByText } = render(
      <ScrollMarkerContainer>
        <ScrollMarkerSection id="example" data-duck-duck="goose">
          Overview
        </ScrollMarkerSection>
      </ScrollMarkerContainer>
    );

    expect(getByText("Overview").getAttribute("data-duck-duck")).toBe("goose");
  });
});
